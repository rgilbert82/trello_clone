var CardWindowView = Backbone.View.extend({
  id: "card_window_layer",
  template: App.templates.card_window,
  events: {
    "click #gray_layer": "closeCardWindow",
    "click #x_out_card_window": "closeCardWindow",
    "click .x_out_card_options_window": "xOutModalWindow",
    "click #card_window": "removeModalIfCardWindowIsClicked",
    "click .open_edit_description": "openEditDescription",
    "click #save_card_description a": "closeEditDescription",
    "click .card_section_header a": "toggleActivityView",
    "click .card_labels_button": "openCardLabelsWindow",
    "click .card_content_label": "openCardLabelsWindow",
    "click .move_card_button": "openMoveCardWindow",
    "click .copy_card_button": "openCopyCardWindow",
    "click .archive_card_button": "archiveCard",
    "click .label_card li": "addRemoveLabel",
    "click .due_date_toggle img": "toggleDueDateHighlight",
    "click .due_date_toggle span": "openDueDateWindow",
    "click .card_due_date_button": "openDueDateWindow",
    "change .boards_dropdown": "updateBoardsDropdown",
    "change .lists_dropdown": "updateListsDropdown",
    "change .positions_dropdown": "updatePositionsDropdown",
    "change .month_dropdown": "updateMonthsDropdown",
    "change .day_dropdown": "updateDaysDropdown",
    "change .time_dropdown": "updateTimeDropdown",
    "submit #card_content_description": "changeDescription",
    "submit #card_add_comment": "addComment",
    "submit .move_card": "moveCard",
    "submit .copy_card": "copyCard",
    "submit .card_due_date": "setDueDate",
    "reset .card_due_date": "removeDueDate"
  },
  closeCardWindow: function() {
    var currentBoardID = $("body").find("#hidden_board_input").attr("data-board_id");
    var pathName = "boards/" + currentBoardID;

    $("body").find("#" + this.id).remove();
    router.navigate(pathName, { trigger: true });
  },
  openEditDescription: function(e) {
    var $container = $("#card_content_description");

    e.preventDefault();

    $container.find(".edit_description_header").hide();
    $container.find("form").show();
  },
  closeEditDescription: function(e) {
    var $container = $("#card_content_description");

    e.preventDefault();

    $container.find("form").hide()[0].reset();
    $container.find(".edit_description_header").show();
  },
  toggleActivityView: function(e) {
    var $target = $(e.target);
    var $ul = $target.closest("div").siblings("ul");

    e.preventDefault();

    if ($ul.is(":visible")) {
      $target.text("Show Details");
      $ul.hide();
    } else {
      $target.text("Hide Details");
      $ul.show();
    }
  },
  changeDescription: function(e) {
    var newDescription = e.target.elements[0].value;
    var cardID = this.model.get("id");

    e.preventDefault();

    App.cards.get(cardID).set({ "description": newDescription });
    this.render();
  },
  addComment: function(e) {
    var comment = $(e.target).serializeArray()[0].value;
    var dateTime = App.getFormattedDateTime();
    var commentObj = { "comment": comment, "user": App.user.get("username"), "dateTime": dateTime };
    var comments = this.model.get("comments").slice();

    e.preventDefault();

    comments.push(commentObj);
    this.model.set({ "comments": comments });
    this.updateCommentActivity(commentObj);
    this.render();
  },
  updateCommentActivity: function(commentObj, cardID) {
    var activity;
    var activityObj = {
      "comment": true,
      "description": commentObj.comment,
      "dateTime": commentObj.dateTime
    };

    if (!cardID) {
      activity = this.model.get("activity").slice();
      activity.unshift(activityObj);
      this.model.set({ "activity": activity });
    } else {
      activity = App.cards.get(cardID).get("activity").slice();
      activity.unshift(activityObj);
      App.cards.get(cardID).set({ "activity": activity });
    }
  },
  updateNonCommentActivity: function(description, cardID) {
    var activityObj = {
      "comment": false,
      "description": description,
      "dateTime": App.getFormattedDateTime()
    }

    if (!cardID) {
      this.model.get("activity").unshift(activityObj);
    } else {
      App.cards.get(cardID).get("activity").unshift(activityObj);
    }
  },
  openCardLabelsWindow: function() {
    this.removeModal();
    App.cardLabelsView(this.model);
  },
  openDueDateWindow: function() {
    this.removeModal();
    App.dueDateView();
    this.setupDueDateCard();
  },
  openMoveCardWindow: function() {
    this.removeModal();
    App.moveCardView();
    this.setupMoveCard();
  },
  openCopyCardWindow: function() {
    this.removeModal();
    App.copyCardView(this.model);
    this.setupMoveCard();
  },
  setupDueDateCard: function() {
    this.updateMonthsDropdown();
    this.updateTimeDropdown();
  },
  updateMonthsDropdown: function() {
    var $monthsDropdown = this.$el.find(".select_month");
    var $titleSpan = $monthsDropdown.find(".title_span");
    var numOfDays = +$monthsDropdown.find(":selected").attr("data-days");
    var monthName = $monthsDropdown.find(":selected").text();

    $titleSpan.text(monthName);
    this.setupDaysDropdown(numOfDays);
  },
  setupDaysDropdown: function(n) {
    var $daysDropdown = this.$el.find(".select_day").find("optgroup");

    $daysDropdown.html("");

    for (var i = 1; i <= n; i++) {
      var $tag = $("<option>" + i + "</option>");
      $tag.appendTo($daysDropdown);
    }

    this.updateDaysDropdown();
  },
  updateDaysDropdown: function() {
    var $daysDropdown = this.$el.find(".select_day");
    var $titleSpan = $daysDropdown.find(".title_span");
    var day = $daysDropdown.find(":selected").text();

    $titleSpan.text(day);
  },
  updateTimeDropdown: function() {
    var $timeDropdown = this.$el.find(".select_time");
    var $titleSpan = $timeDropdown.find(".title_span");
    var hour = $timeDropdown.find(":selected").text();

    $titleSpan.text(hour);
  },
  toggleDueDateHighlight: function(e) {
    this.model.set({ "dueDateHighlighted": !this.model.get("dueDateHighlighted") });
    this.render();
  },
  addRemoveLabel: function(e) {
    var color = $(e.target).attr("class").replace("label_", "");
    var checkbox = $(e.target).find("input[type='checkbox']")[0];
    var cardID = this.model.get("id");
    var card = this.model;
    var labels = this.model.get("labels").slice();

    checkbox.checked = !checkbox.checked;

    if (labels.indexOf(color) === -1) {
      labels.push(color);
      card.set({ "labels": labels });
    } else {
      labels = _.without(labels, color );
      card.set({ "labels": labels });
    }

    this.render();
    this.openCardLabelsWindow();
  },
  setupMoveCard: function() {
    var $boardsDropdown = this.$el.find(".select_board").find("optgroup");

    App.boards.each(function(model) {
      var $tag = $("<option data-id='" + model.get("id") + "'>" + model.get("title") + "</option>");
      $tag.appendTo($boardsDropdown);
    });

    this.updateBoardsDropdown();
  },
  updateBoardsDropdown: function() {
    var $boardsDropdown = this.$el.find(".select_board");
    var $titleSpan = $boardsDropdown.find(".title_span");
    var selectedBoardID = +$boardsDropdown.find(":selected").attr("data-id");
    var selectedBoardTitle = $boardsDropdown.find(":selected").text();

    $titleSpan.text(selectedBoardTitle);
    this.setupListsDropdown(selectedBoardID);
  },
  setupListsDropdown: function(boardID) {
    var $listsDropdown = this.$el.find(".select_list").find("optgroup");
    var lists = App.boards.get(boardID).get("lists");

    if (lists.length === 0) {
      this.updateDropdownsForEmptyBoard();
      return;
    }

    $listsDropdown.html("");

    lists.each(function(model) {
      var $tag = $("<option data-id='" + model.get("id") + "'>" + model.get("title") + "</option>");
      $tag.appendTo($listsDropdown);
    });

    this.updateListsDropdown();
  },
  updateListsDropdown: function() {
    var $listsDropdown = this.$el.find(".select_list");
    var $titleSpan = $listsDropdown.find(".title_span");
    var selectedListID = +$listsDropdown.find(":selected").attr("data-id");
    var selectedListTitle = $listsDropdown.find(":selected").text();

    $titleSpan.text(selectedListTitle);
    this.setupPositionsDropdown(selectedListID);
  },
  setupPositionsDropdown: function(listID) {
    var $positionsDropdown = this.$el.find(".select_position").find("optgroup");
    var isMoveCard = this.$el.find(".card_options").hasClass("move_card");
    var positionsLength;

    if (isMoveCard && this.model.get("listID") === listID) {
      positionsLength = App.lists.get(listID).get("cards").length;
    } else {
      positionsLength = App.lists.get(listID).get("cards").length + 1;
    }

    $positionsDropdown.html("");

    for (var i = 1; i <= positionsLength; i++) {
      var $tag = $("<option data-id='" + i + "'>" + i + "</option>");
      $tag.appendTo($positionsDropdown);
    }

    this.updatePositionsDropdown();
  },
  updatePositionsDropdown: function() {
    var $positionsDropdown = this.$el.find(".select_position");
    var $titleSpan = $positionsDropdown.find(".title_span");
    var selectedPositionTitle = $positionsDropdown.find(":selected").text();

    $titleSpan.text(selectedPositionTitle);
  },
  updateDropdownsForEmptyBoard: function() {
    var $lists = this.$el.find(".select_list").find("optgroup");
    var $positions = this.$el.find(".select_position").find("optgroup");
    var $listsTitle = this.$el.find(".select_list").find(".title_span");
    var $positionsTitle = this.$el.find(".select_position").find(".title_span");

    $lists.html("");
    $positions.html("");
    $listsTitle.text("No Lists");
    $positionsTitle.text("N/A");
  },
  setDueDate: function(e) {
    var data = {};
    var dueDate;
    var dueDateActivity;

    e.preventDefault();

    $(e.target).serializeArray().forEach(function(item) {
      data[item.name] = item.value;
    });

    dueDate = { "date": data.month.substring(0, 3) + " " + data.day, "time": data.time };
    dueDateActivity = "set this card to be due " + dueDate.date + " at " + dueDate.time;
    this.updateNonCommentActivity(dueDateActivity);
    this.model.set({ "dueDate": dueDate });
    this.render();
  },
  removeDueDate(e) {
    e.preventDefault();

    this.updateNonCommentActivity("removed the due date for this card");
    this.model.set({ "dueDate": "" });
    this.render();
  },
  moveCard: function(e) {
    var currentListID = this.model.get("listID");
    var listID = +this.$el.find(".select_list").find(":selected").attr("data-id");
    var position = +$(e.target).serializeArray()[2].value;
    var currentList = App.lists.get(this.model.get("listID")).get("title");
    var newList = App.lists.get(listID).get("title");
    var activityDescription = "moved this card from " + currentList + " to " + newList;

    e.preventDefault();

    this.updateNonCommentActivity(activityDescription);
    this.model.set({ "listID": listID, "position": position });
    if (currentListID === listID) { this.model.trigger("change:listID", this.model); }
    this.closeCardWindow();
  },
  copyCard: function(e) {
    var newCardID = App.cards.sortBy("id").reverse()[0].id + 1;
    var listID = +this.$el.find(".select_list").find(":selected").attr("data-id");
    var currentList = App.lists.get(this.model.get("listID")).get("title");
    var newList = App.lists.get(listID).get("title");
    var activityDescription = "copied this card from " + currentList + " to " + newList;
    var copy = this.model.clone();
    var props = {};
    var self = this;

    e.preventDefault();

    $(e.target).serializeArray().forEach(function(item) {
      props[item.name] = item.value;
    });

    copy.set({
      "id": newCardID,
      "listID": listID,
      "position": +props.position,
      "title": props.title,
      "activity": []
    });

    if (!props.labels) {
      copy.set({ "labels": [] });
    }

    if (!props.comments) {
      copy.set({  "comments": [] });
    }

    App.addNewCard.call(App, copy);
    copy.get("comments").forEach(function(commentObj) {
      self.updateCommentActivity(commentObj, newCardID);
    });
    this.updateNonCommentActivity(activityDescription, newCardID);
    this.closeCardWindow();
  },
  archiveCard: function() {
    this.removeModal();
    App.archiveCard(this.model);
    this.closeCardWindow();
  },
  xOutModalWindow: function(e) {
    e.preventDefault();
    this.removeModal();
  },
  removeModal: function() {
    this.$el.find(".edit_modal").remove();
  },
  removeModalIfCardWindowIsClicked: function(e) {
    if ($(e.target).closest("ul").hasClass("modal_opener")) {
      return;
    } else if ($(e.target).hasClass("modal_opener")) {
      return;
    } else {
      this.removeModal();
    }
  },
  render: function() {
    var listTitle = App.lists.get(this.model.get("listID")).get("title");
    var data = _.extend(this.model.toJSON(), App.user.toJSON(), {"listTitle": listTitle});

    this.$el.html(this.template(data));
  },
  initialRender: function() {
    this.render();
    this.$el.appendTo($("body"));
  },
  initialize: function() {
    this.initialRender();
  }
});

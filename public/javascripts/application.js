var App = {
  templates: JST,
  $el: $("main"),
  index: function() {
    this.boardSelectionView();
    this.setupStarredBoardsList();
    this.setupPersonalBoardsList();
  },
  reSetupIndex: function() {
    var $container = $("#board_selection_view");
    var scrollY = $container[0].scrollTop;

    $("#personal_boards_list").html("");
    $("#starred_boards_list").html("");
    this.setupStarredBoardsList();
    this.setupPersonalBoardsList();
    $container[0].scrollTop = scrollY;
  },
  setupBoardIfValidRoute: function(id) {
    var isValidBoard = this.boards.toJSON().some(function(board) { return board.id === +id });

    if (isValidBoard) {
      this.setupBoard(id);
    } else {
      router.navigate("/", { trigger: true });
    }
  },
  setupBoard: function(id) {
    this.boardView(+id);
    this.renderListsForBoard(+id);
    this.addListView();
  },
  reSetupBoard: function(id) {
    var scrollX = $("#lists")[0].scrollLeft;

    this.setupBoard(id);
    $("#lists")[0].scrollLeft = scrollX;
  },
  addNewBoard: function(newBoard) {
    this.boards.add(newBoard);

    if (App.$el.find("#board_selection_view").length > 0) {
      this.reSetupIndex();
    } else {
      router.navigate("/", { trigger: true });
    }

    this.writeBoards();
  },
  setupStarredBoardsList: function() {
    var $container = $("#starred_boards");
    var ul = "#starred_boards_list";
    var starredBoards = this.boards.where({"starred": true});
    var self = this;

    if (starredBoards.length > 0) {
      $container.show();
      starredBoards.forEach(function(model) {
        self.boardSelectorView(model, ul);
      });
    } else {
      $container.hide();
    }
  },
  setupPersonalBoardsList: function() {
    var ul = "#personal_boards_list";
    var self = this;

    this.boards.each(function(model) {
      self.boardSelectorView(model, ul);
    });

    this.addBoardView();
  },
  setupList: function(model) {
    this.listView(model);
    this.renderCardsForList(model);
  },
  reSetupList: function(listID) {
    var $list = this.$el.find("ul[data-list_id='" + listID + "']");
    var model = this.lists.get(listID);

    if ($list) {
      $list.html("");
      this.renderCardsForList(model);
    }
  },
  addNewList: function(newList) {
    var boardID = newList.get("boardID");

    this.lists.add(newList);
    this.boards.get(boardID).get("lists").add(newList);
    this.reSetupBoard(boardID);
    this.writeLists();
  },
  renderListsForBoard: function(id) {
    this.boards.get(id).get("lists").each(this.setupList.bind(this));
  },
  renderCardsForList: function(model) {
    model.get("cards").each(this.cardView.bind(this));
  },
  addNewCard: function(newCard) {
    var listID = newCard.get("listID");

    this.cards.add(newCard);
    this.lists.get(listID).addCard(newCard);
    this.reSetupList(listID);
    this.writeCards();
  },
  openCardWindowIfValidRoute: function(cardID) {
    var isValidCard = this.cards.toJSON().some(function(card) { return card.id === +cardID });

    if (isValidCard) {
      this.openCardWindow(cardID);
    } else {
      router.navigate("/", { trigger: true });
    }
  },
  openCardWindow: function(cardID) {
    var listID = App.cards.get(+cardID).get("listID");
    var boardID = App.lists.get(listID).get("boardID");
    var model = this.cards.get(+cardID);

    if (this.$el.text().length === 0) {
      this.setupBoard(boardID);
    }

    this.cardWindowView(model);
  },
  changeBoardStarredStatus: function(boardID) {
    var board = this.boards.get(boardID);
    board.set({ "starred": !board.get("starred") });
  },
  changeCardPosition: function(obj) {
    var card = this.cards.get(obj.id);
    var oldList = App.lists.get(card.get("listID"));
    var newList = App.lists.get(obj.listID);
    var boardID = +this.$el.find("#hidden_board_input").attr("data-board_id");

    oldList.get("cards").remove(obj.id);
    card.set({ "listID": obj.listID, "position": obj.position });
    newList.addCard(card);
  },
  changeListPosition: function(obj) {
    var list = this.lists.get(obj.id);
    var boardID = list.get("boardID");
    var board = App.boards.get(boardID);

    board.changePosition.call(board, obj)
  },
  addCardToList: function(model) {
    var listID = model.get("listID");

    if (listID > 0) {
      this.lists.get(listID).addCard(model);
    }
  },
  addListToBoard: function(model) {
    var boardID = model.get("boardID");

    if (boardID > 0) {
      this.boards.get(boardID).addList(model);
    }
  },
  archiveCard: function(model) {
    model.set({ "listID": 0, "archived": true });
  },
  archiveList: function(model) {
    model.set({ "boardID": 0, "archived": true });
  },
  getFormattedDateTime: function() {
    var dateTime = new Date();
    var date = String(dateTime).replace(/^\w+\s/, "").match(/^\w+\s\d+\s\d+/)[0];
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var formattedMinutes = ('0' + String(minutes)).slice(-2);
    var ampm = hours > 12 ? 'PM' : 'AM';
    var time;

    if (hours > 12) {
      hours = hours % 12;
    } else if (hours === 0) {
      hours = 12;
    }

    time = String(hours) + ':' + formattedMinutes + ' ' + ampm;

    return date + " at " + time;
  },
  fadeInSearchWindow: function() {
    $("#header_search_results").fadeIn(100);
  },
  fadeOutSearchWindow: function() {
    this.clearSearchField();
    $("#search_no_results").css("display", "block");
    $("#header_search_results").fadeOut(100);
    $("#header_search input[type='text']").val("");
  },
  fadeOutSearchWindowIfOutsideIsClicked: function(e) {
    var clickedInsideSearchWindow = $(e.target).closest(".header_button").is("#header_search");

    if (!clickedInsideSearchWindow) {
      this.fadeOutSearchWindow();
    }
  },
  clearSearchField: function() {
    $("#search_results_list").html("");
  },
  getSearchResults: function(e) {
    var self = this;
    var searchValue = e.target.value.trim();
    var regExp = new RegExp("^" + searchValue, "i");
    var results = this.cards.toJSON().filter(function(card) {
      return card.title.match(regExp) && card.archived === false;
    });

    results = results.map(function(card) {
      var listTitle = self.lists.get(+card.listID).get("title");
      var boardID = self.lists.get(+card.listID).get("boardID");
      var boardTitle = self.boards.get(boardID).get("title");

      return { "title": card.title, "id": card.id, "listTitle": listTitle, "boardTitle": boardTitle, "boardID": boardID };
    });

    this.clearSearchField();

    if (searchValue && results.length > 0) {
      $("#search_no_results").css("display", "none");
      this.renderSearchResults(results);
    } else {
      $("#search_no_results").css("display", "block");
    }
  },
  renderSearchResults: function(results) {
    var self = this;

    results.forEach(function(result) {
      self.searchResultView(new SearchResult(result));
    });
  },
  navigateToSearchResult: function(e) {
    var boardID = +$(e.target).closest(".search_result").find(".hidden_search_results_input").attr("data-board_id");
    var cardID = +$(e.target).closest(".search_result").find(".hidden_search_results_input").attr("data-card_id");
    var cardPathName = "cards/" + cardID;

    e.preventDefault();

    $("body").find("#card_window_layer").remove();
    this.fadeOutSearchWindow();
    this.setupBoard(boardID);
    router.navigate(cardPathName, { trigger: true });
  },
  openCreateBoardWindow: function(e) {
    e.preventDefault();
    this.createBoardView();
  },
  openUserProfileWindow: function(e) {
    e.preventDefault();
    // Not Yet Implemented
  },
  openNotificationsWindow: function(e) {
    e.preventDefault();
    this.notificationsView();
  },
  navigateToBoardSelectionPage: function(e) {
    e.preventDefault();
    router.navigate("/", { trigger: true });
  },
  menu: function() {
    this.menuView(new ActivityList({ "activity": this.cards.toJSON()}));
  },
  boardSelectionView: function() {
    new BoardSelectionView();
  },
  boardSelectorView: function(model, ul) {
    new BoardSelectorView({
      model: model,
      attributes: {
        ul: ul
      }
    });
  },
  addBoardView: function() {
    new AddBoardView();
  },
  boardView: function(id) {
    new BoardView({
      attributes: {
        boardID: id
      },
      model: this.boards.get(id)
    });
  },
  listView: function(model) {
    new ListView({
      model: model
    });
  },
  addListView: function() {
    new AddListView();
  },
  cardView: function(model) {
    new CardView({
      model: model
    });
  },
  cardWindowView: function(model) {
    new CardWindowView({
      model: model
    });
  },
  cardLabelsView: function(model) {
    new CardLabelsView({
      model: model
    });
  },
  dueDateView: function() {
    new DueDateView();
  },
  moveCardView: function() {
    new MoveCardView();
  },
  copyCardView: function(model) {
    new CopyCardView({
      model: model
    });
  },
  searchResultView: function(model) {
    new SearchResultView({
      model: model
    });
  },
  createBoardView: function() {
    new CreateBoardView();
  },
  notificationsView: function() {
    new NotificationsView();
  },
  menuView: function(model) {
    new MenuView({
      model: model
    });
  },
  listOptionsView: function(model, $clickPoint) {
    new ListOptionsView({
      attributes: {
        parent: $clickPoint
      },
      model: model
    });
  },
  copyListView: function(model, parent) {
    new CopyListView({
      attributes: {
        parent: parent
      },
      model: model
    });
  },
  moveListView: function(model, parent) {
    new MoveListView({
      attributes: {
        parent: parent
      },
      model: model
    });
  },
  moveAllCardsView: function(model, parent) {
    new MoveAllCardsView({
      attributes: {
        parent: parent
      },
      model: model
    });
  },
  archiveAllCardsView: function(model, parent) {
    new ArchiveAllCardsView({
      attributes: {
        parent: parent
      },
      model: model
    });
  },
  writeBoards: function() {
    var self = this;

    $.ajax({
      url: "/write_boards",
      type: "post",
      data: "&data=" + JSON.stringify(self.boards)
    })
  },
  writeLists: function() {
    var self = this;

    $.ajax({
      url: "/write_lists",
      type: "post",
      data: "&data=" + JSON.stringify(self.lists)
    })
  },
  writeCards: function() {
    var self = this;

    $.ajax({
      url: "/write_cards",
      type: "post",
      data: "&data=" + JSON.stringify(self.cards)
    })
  },
  bindEvents: function() {
    $("#header_search input[type='text']").on("input", this.getSearchResults.bind(this));
    $("#header_search input[type='text']").on("focus", this.fadeInSearchWindow.bind(this));
    $("#header_boards_button").on("click", "a", this.navigateToBoardSelectionPage.bind(this));
    $("#header_search_results").on("click", "a", this.navigateToSearchResult.bind(this));
    $("#header_add_board").on("click", "a", this.openCreateBoardWindow.bind(this));
    $("#header_username").on("click" , "a", this.openUserProfileWindow.bind(this));
    $("#header_notifications").on("click", "a", this.openNotificationsWindow.bind(this));
    $("#header_logo").on("click", this.navigateToBoardSelectionPage.bind(this));
    $("html").on("click", this.fadeOutSearchWindowIfOutsideIsClicked.bind(this));
  }
};

_.extend(App, Backbone.Events);

App.bindEvents();

Handlebars.registerHelper("isInArray", function(item, arr) {
  if (arr.indexOf(item) !== -1) {
    return "checked";
  }
});

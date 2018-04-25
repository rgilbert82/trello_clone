var ListView = Backbone.View.extend({
  className: "list_view",
  template: App.templates.list,
  events: {
    "click .footer_add_a_card": "openAddCardWindow",
    "click #cancel_add_card a": "closeAddCardWindow",
    "click .add_card_ellipsis": "openAddCardMenu",
    "click .ellipsis_icon a": "openListOptionsMenu",
    "click .list_header .list_header_title": "openChangeTitleBar",
    "blur .list_header input": "changeListTitle",
    "keyup .list_header input": "changeListTitleIfEnterClicked",
    "submit .add_new_card_form": "addNewCard"
  },
  openChangeTitleBar: function(e) {
    var input = $(e.target).closest("div").find("input[type='text']");
    var header = $(e.currentTarget);

    e.preventDefault();

    input.show();
    input.focus();
    header.hide();
  },
  changeListTitle: function(e) {
    var title = e.target.value;
    this.model.set({ "title": title });
    this.rerender();
  },
  changeListTitleIfEnterClicked: function(e) {
    if (e.keyCode === 13) {
      this.model.set({ "title": e.target.value });
      this.rerender();
    }
  },
  openAddCardWindow: function(e) {
    var $container = $(e.target).closest(".list_footer");

    e.preventDefault();

    $container.find(".footer_add_a_card").hide();
    $container.find("form").show();
  },
  closeAddCardWindow: function(e) {
    var $container = $(e.target).closest(".list_footer");

    e.preventDefault();

    $container.find("form").hide();
    $container.find("form")[0].reset();
    $container.find(".footer_add_a_card").show();
  },
  openListOptionsMenu: function(e) {
    e.preventDefault();
    var $clickPoint = $(e.target).closest(".list_item_wrapper");
    App.listOptionsView(this.model, $clickPoint);
  },
  openAddCardMenu: function(e) {
    e.preventDefault();
    // Not Yet Implemented
  },
  addNewCard: function(e) {
    var listID = +this.$el.find(".hidden_list_input").attr("data-list_id");
    var newCardID = App.cards.sortBy("id").reverse()[0].id + 1;
    var cardsInList = App.cards.where({ "listID": listID });
    var newCardPosition = cardsInList.length > 0 ? cardsInList.reverse()[0].get("position") + 1 : 1;
    var newCardTitle = e.target.elements[0].value;
    var newCard = new Card({
      "id": newCardID,
      "listID": listID,
      "position": newCardPosition,
      "title": newCardTitle
    });

    e.preventDefault();

    this.closeAddCardWindow(e);
    App.addNewCard.call(App, newCard);
  },
  setupDragEvents: function() {
    var self = this;

    this.$el.draggable({
      appendTo: "body",
      connectToSortable: "#lists_container",
      delay: 100,
      cursor: "-webkit-grabbing",
      handle: "div.list_item_wrapper",
      helper: "clone",
      revert: "invalid",
      revertDuration: 100,
      scroll: false,
      start : function(e, ui) {
        ui.helper.width($(this).width());
        self.$el.remove();
      },
      stop: function(e, ui) {
        var boardID = self.model.get("boardID");
        App.reSetupBoard(boardID);
      },
      zIndex: 100
    });

    this.$el.find(".cards ul").sortable({
      connectWith: ".cards ul",
      dropOnEmpty: true,
      forcePlaceholderSize: true,
      placeholder: "droppable_card_area",
      scroll: false,
      tolerance: "pointer",
      stop: Drag.updateCardPositionFromDrag.bind(Drag)
    });
  },
  rerender: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.renderCardsForList(this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("#lists #lists_container"));
  },
  initialize: function() {
    this.render();
    this.setupDragEvents();
  }
});

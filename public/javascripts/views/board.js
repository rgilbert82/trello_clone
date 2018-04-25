var BoardView = Backbone.View.extend({
  id: "board_view",
  template: App.templates.board,
  events: {
    "click .card_view": "openCard",
    "click #board_title a": "doNothing",
    "click #star_icon a": "changeStarredStatus",
    "click #show_menu a": "openMenu"
  },
  doNothing: function(e) {
    e.preventDefault();
  },
  openCard: function(e) {
    var cardID = $(e.target).closest("li").find("input").attr("data-card_id");
    var pathName = "cards/" + cardID;

    router.navigate(pathName, { trigger: true });
  },
  openMenu: function(e) {
    e.preventDefault();
    App.menu();
  },
  changeStarredStatus: function(e) {
    var boardID = this.attributes.boardID;
    var $icon = $("#star_icon");
    e.preventDefault();

    if ($icon.hasClass("starred")) {
      $icon.removeClass("starred");
    } else {
      $icon.addClass("starred");
    }

    App.changeBoardStarredStatus(boardID);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  setupDragEvents: function() {
    this.$el.find("#lists_container").sortable({
      handle: "div.list_item_wrapper",
      placeholder: "droppable_list_area",
      scroll: false,
      tolerance: "pointer",
      start: function(e, ui){
        var elHeight = $(ui.item[0]).find(".list_item_wrapper").height();
        ui.placeholder.height(elHeight);
      },
      stop: Drag.updateListPositionFromDrag.bind(Drag)
    });
  },
  initialize: function() {
    this.render();
    this.setupDragEvents();
  }
});

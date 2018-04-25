var BoardSelectionView = Backbone.View.extend({
  id: "board_selection_view",
  template: App.templates.board_selection,
  events: {
    "mouseenter .header_selector_star_icon": "zoomInStar",
    "mouseleave .header_selector_star_icon": "zoomOutStar",
    "click .board_selector_view": "boardSelectorOptions"
  },
  zoomInStar: function(e) {
    $(e.currentTarget).find("img").animate({ margin: -2, width: "+=5", height: "+=5" }, 200);
  },
  zoomOutStar: function(e) {
    $(e.currentTarget).find("img").animate({ margin: 0, width: "-=5", height: "-=5" }, 200);
  },
  boardSelectorOptions: function(e) {
    var boardID = +$(e.currentTarget).closest("li").find("input").attr("data-board_id");

    if (e.target.tagName === "IMG") {
      e.preventDefault();
      this.changeStarredStatus(boardID);
    } else {
      this.navigateToBoardRoute(boardID);
    }
  },
  changeStarredStatus: function(boardID) {
    App.changeBoardStarredStatus(boardID);
    App.reSetupIndex();
  },
  navigateToBoardRoute: function(boardID) {
    var pathName = "boards/" + boardID;
    router.navigate(pathName, { trigger: true });
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});

var CardView = Backbone.View.extend({
  tagName: "li",
  className: "card_view",
  template: App.templates.card,
  render: function(listID) {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find($(".card_selector_list[data-list_id='" + listID + "']")));
  },
  setupDragEvents: function() {
    var self = this;

    this.$el.draggable({
      appendTo: "body",
      connectToSortable: ".cards ul",
      cursor: "-webkit-grabbing",
      delay: 100,
      helper: "clone",
      revert: "invalid",
      revertDuration: 100,
      scroll: false,
      start : function(e, ui) {
        ui.helper.width($(this).width());
        self.$el.remove();
      },
      stop: function(e, ui) {
        var boardID = App.lists.get(self.model.get("listID")).get("boardID");
        App.reSetupBoard(boardID);
      },
      zIndex: 100
    });
  },
  initialize: function() {
    var listID = this.model.get("listID");
    this.render(listID);
    this.setupDragEvents();
  }
});

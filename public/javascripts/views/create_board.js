var CreateBoardView = Backbone.View.extend({
  className: "general_modal",
  template: App.templates.create_board,
  events: {
    "click .x_out_card_options_window": "closeModal",
    "click .close_modal_layer": "closeModal",
    "submit form": "createNewBoard"
  },
  createNewBoard: function(e) {
    var newBoardTitle = e.target.elements[0].value;
    var newBoardID = App.boards.sortBy("id").reverse()[0].id + 1;
    var newBoard = new Board({
      "id": newBoardID,
      "title": newBoardTitle
    });

    e.preventDefault();

    this.closeModal();
    App.addNewBoard.call(App, newBoard);
  },
  closeModal: function() {
    this.$el.remove();
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.appendTo($("#header_add_board"));
  },
  initialize: function() {
    this.render();
  }
});

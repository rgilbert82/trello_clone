var Boards = Backbone.Collection.extend({
  model: Board,
  comparator: function(board) {
    return board.get("id");
  }
});

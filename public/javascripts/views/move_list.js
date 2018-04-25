var MoveListView = Backbone.View.extend({
  className: "list_options_modal modal_window",
  template: App.templates.move_list,
  events: {
    "click .x_out_card_options_window": "closeModal",
    "click .close_modal_layer": "closeModal",
    "change .boards_dropdown": "updateBoardsDropdown",
    "change .positions_dropdown": "updatePositionsDropdown",
    "submit form": "moveList"
  },
  closeModal: function() {
    this.$el.remove();
  },
  moveList: function(e) {
    var currentBoardID = this.model.get("boardID");
    var boardID = +this.$el.find(".select_list_board").find(":selected").attr("data-id");
    var position = +$(e.target).serializeArray()[1].value;

    e.preventDefault();

    this.model.set({ "boardID": boardID, "position": position });
    App.reSetupBoard(currentBoardID);
  },
  setupDropdowns: function() {
    var $boardsDropdown = this.$el.find(".select_list_board").find("optgroup");
    var boardID = this.model.get("boardID");
    var otherBoards = App.boards.toJSON().filter(function(board) { return board.id !== boardID });

    otherBoards.forEach(function(board) {
      var $tag = $("<option data-id='" + board.id + "'>" + board.title + "</option>");
      $tag.appendTo($boardsDropdown);
    });

    this.updateBoardsDropdown();
  },
  updateBoardsDropdown: function() {
    var $boardsDropdown = this.$el.find(".select_list_board");
    var $titleSpan = $boardsDropdown.find(".title_span");
    var selectedBoardID = +$boardsDropdown.find(":selected").attr("data-id");
    var selectedBoardTitle = $boardsDropdown.find(":selected").text();

    $titleSpan.text(selectedBoardTitle);
    this.setupPositionsDropdown(selectedBoardID);
  },
  setupPositionsDropdown: function(boardID) {
    var $positionsDropdown = this.$el.find(".select_list_position").find("optgroup");
    var positionsLength = App.boards.get(boardID).get("lists").length + 1;

    $positionsDropdown.html("");

    for (var i = 1; i <= positionsLength; i++) {
      var $tag = $("<option data-id='" + i + "'>" + i + "</option>");
      $tag.appendTo($positionsDropdown);
    }

    this.updatePositionsDropdown();
  },
  updatePositionsDropdown: function() {
    var $positionsDropdown = this.$el.find(".select_list_position");
    var $titleSpan = $positionsDropdown.find(".title_span");
    var selectedPositionTitle = $positionsDropdown.find(":selected").text();

    $titleSpan.text(selectedPositionTitle);
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.appendTo(this.attributes.parent);
  },
  initialize: function() {
    this.render();
    this.setupDropdowns();
  }
});

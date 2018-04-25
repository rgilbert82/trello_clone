var AddListView = Backbone.View.extend({
  className: "add_list_view",
  template: App.templates.add_list,
  events: {
    "click #add_list_title": "fadeInAddListButton",
    "click #cancel_add_list a": "fadeOutAddListButton",
    "submit form": "addNewList"
  },
  fadeInAddListButton: function(e) {
    e.preventDefault();

    $("#add_list_title").fadeOut(100);
    $(".add_list_item_wrapper form").delay(100).fadeIn(100);
  },
  fadeOutAddListButton: function(e) {
    var self = this;

    e.preventDefault();

    $(".add_list_item_wrapper form").fadeOut(100);
    $("#add_list_title").delay(100).fadeIn(100);
    setTimeout(function() {
      self.$el.find("form")[0].reset();
    }, 200);
  },
  addNewList: function(e) {
    var newListID = App.lists.sortBy("id").reverse()[0].id + 1;
    var boardID = +$("#hidden_board_input").attr("data-board_id");
    var listsInBoard = App.lists.where({ "boardID": boardID });
    var newListPosition = listsInBoard.length > 0 ? listsInBoard.reverse()[0].get("position") + 1 : 1;
    var newListTitle = e.target.elements[0].value;
    var newList = new List({
      "id": newListID,
      "boardID": boardID,
      "position": newListPosition,
      "title": newListTitle
    });

    e.preventDefault();

    App.addNewList.call(App, newList);
  },
  render: function() {
    this.$el.html(this.template({"title": "Add a list..."}));
    this.$el.appendTo(App.$el.find("#lists"));
  },
  initialize: function() {
    this.render();
  }
});

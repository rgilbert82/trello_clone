var Board = Backbone.Model.extend({
  defaults: {
    starred: false,
    lists: []
  },
  setLists: function() {
    this.set({"lists": new Lists(App.lists.where({"boardID": this.id}))});
  },
  resetLists: function() {
    this.get("lists").reset(App.lists.where({"boardID": this.id}));
  },
  addList: function(model) {
    var newListPosition = model.get("position");

    this.reorderLists(newListPosition);
    this.get("lists").add(model);
  },
  reorderLists: function(newListPosition) {
    this.get("lists").each(function(list, index) {
      var position = index + 1;
      if (newListPosition && position >= newListPosition) {
        list.set({ "position": position + 1 });
      } else {
        list.set({ "position": position });
      }
    });
  },
  changePosition: function(obj) {
    var model = this.get("lists").remove(obj.id);

    model.set({ "position":obj.position });
    this.addList(model);
  },
  changeLists: function(model) {
    this.get("lists").remove(model);
    this.reorderLists();
    App.addListToBoard.call(App, model);
  },
  writeChanges: function() {
    App.writeBoards.call(App);
  },
  bindEvents: function() {
    this.listenTo(this, "change", this.writeChanges.bind(this));
    this.listenTo(this.get("lists"), "change:boardID", this.changeLists.bind(this));
  },
  initialize: function() {
    this.setLists();
    this.bindEvents();
  }
});

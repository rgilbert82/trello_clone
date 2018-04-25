var Card = Backbone.Model.extend({
  defaults: {
    "dueDate": "",
    "dueDateHighlighted": false,
    "description": "",
    "labels": [],
    "activity": [],
    "comments": [],
    "archived": false
  },
  writeChanges: function() {
    App.writeCards.call(App);
  },
  bindEvents: function() {
    this.listenTo(this, "change", this.writeChanges.bind(this));
  },
  initialize: function() {
    this.bindEvents();
  }
});

var router = new (Backbone.Router.extend({
  routes: {
    "boards/:boardID": App.setupBoardIfValidRoute.bind(App),
    "cards/:cardID": App.openCardWindowIfValidRoute.bind(App)
  },
  index: function() { App.index(); },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

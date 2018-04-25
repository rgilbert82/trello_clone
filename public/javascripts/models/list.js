var List = Backbone.Model.extend({
  default: {
    cards: [],
    "archived": false
  },
  setCards: function() {
    this.set({"cards": new Cards(App.cards.where({"listID": this.id}))});
  },
  resetCards: function() {
    this.get("cards").reset(App.cards.where({"listID": this.id}));
  },
  addCard: function(model) {
    var newCardPosition = model.get("position");

    this.reorderCards(newCardPosition);
    this.get("cards").add(model);
  },
  reorderCards: function(newCardPosition) {
    this.get("cards").each(function(card, index) {
      var position = index + 1;
      if (newCardPosition && position >= newCardPosition) {
        card.set({ "position": position + 1 });
      } else {
        card.set({ "position": position });
      }
    });
  },
  changeCards: function(model) {
    this.get("cards").remove(model);
    this.reorderCards();
    App.addCardToList.call(App, model);
  },
  writeChanges: function() {
    App.writeLists.call(App);
  },
  bindEvents: function() {
    this.listenTo(this, "change", this.writeChanges.bind(this));
    this.listenTo(this.get("cards"), "change:listID", this.changeCards.bind(this));
  },
  initialize: function() {
    this.setCards();
    this.bindEvents();
  }
});

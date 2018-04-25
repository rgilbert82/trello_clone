var Cards = Backbone.Collection.extend({
  model: Card,
  comparator: function(card) {
    return card.get("position");
  }
});

var CopyListView = Backbone.View.extend({
  className: "list_options_modal modal_window",
  template: App.templates.copy_list,
  events: {
    "click .x_out_card_options_window": "closeModal",
    "click .close_modal_layer": "closeModal",
    "submit form": "copyList"
  },
  closeModal: function() {
    this.$el.remove();
  },
  cloneCards: function(listID) {
    return this.model.get("cards").map(function(card) {
      var cardData = card.toJSON();
      var newID = App.cards.sortBy("id").reverse()[0].id + 1;
      var newCard;

      cardData.listID = listID;
      cardData.id = newID;
      newCard = new Card(cardData);
      App.cards.add(newCard);
      return newCard;
    });
  },
  copyList: function(e) {
    var title = $(e.target).serializeArray()[0].value;
    var id = App.lists.sortBy("id").reverse()[0].id + 1;
    var position = App.boards.get(this.model.get("boardID")).get("lists").length + 1;
    var newList = this.model.clone();
    var newCards = this.cloneCards(id);
    var newCardsCollection = new Cards(newCards);

    e.preventDefault();

    newList.set({ "title": title, "id": id, "position": position , "cards": newCardsCollection });
    App.addNewList.call(App, newList);
    App.writeCards();
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.appendTo(this.attributes.parent);
  },
  initialize: function() {
    this.render();
  }
});

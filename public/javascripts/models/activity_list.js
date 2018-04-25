var ActivityList = Backbone.Model.extend({
  setupActivityList: function() {
    var cardActivity = this.get("activity").map(function(card) {
      var cardTitle = "<u>" + card.title + "</u>";
      card.activity.forEach(function(act) {
        act.description = act.description.replace("this card", cardTitle);
      });
      return card.activity;
    }).reduce(function(a, b) { return a.concat(b) }).sort(function(a, b) { return a.dateTime < b.dateTime });

    this.set({ "activity": cardActivity });
  },
  initialize: function() {
    this.setupActivityList();
  }
});

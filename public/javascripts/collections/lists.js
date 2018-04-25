var Lists = Backbone.Collection.extend({
  model: List,
  comparator: function(list) {
    return list.get("position");
  }
});

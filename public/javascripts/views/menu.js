var MenuView = Backbone.View.extend({
  className: "menu_modal",
  template: App.templates.menu,
  events: {
    "click .x_out_card_options_window": "closeModal",
    "click .close_modal_layer": "closeModal",
  },
  closeModal: function() {
    this.$el.remove();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el);
  },
  initialize: function() {
    this.render();
  }
});

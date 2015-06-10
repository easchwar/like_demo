LikeDemo.Routers.Router = Backbone.Router.extend({

  routes: {
    "": "index",
  },

  initialize: function(options) {
   this.$rootEl = options.$rootEl;
  },

  index: function() {
    var photos = new LikeDemo.Collections.Photos();
    photos.fetch();
    var view = new LikeDemo.Views.PhotosIndex({collection: photos});
    this.$rootEl.html(view.render().$el);
  },
});

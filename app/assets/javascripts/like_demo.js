window.LikeDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new LikeDemo.Routers.Router({
      $rootEl: $('body')
    });
    Backbone.history.start();
  }
};
$(document).ready(function(){
  LikeDemo.initialize();
});

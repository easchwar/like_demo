LikeDemo.Views.PhotosIndex = Backbone.CompositeView.extend({

  template: JST['photos/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPhotoSubview);
  },

  addPhotoSubview: function(photo) {
    var view = new LikeDemo.Views.PhotosIndexItem({model: photo});
    this.addSubview('.index', view);
  },

  render: function () {
    var renderedContent = this.template({photos: this.collection});
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  }
});


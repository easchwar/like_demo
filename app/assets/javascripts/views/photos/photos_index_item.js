LikeDemo.Views.PhotosIndexItem = Backbone.View.extend({
    template: JST['photos/index_item'],

    events: {
      "click .toggle": "toggleLike",
    },

    initialize: function() {
      this.listenTo(this.model, 'sync change:numLikes', this.render);
      this.listenTo(this.model.like(), 'change', this.render);
    },
    
    toggleLike: function(event) {
      if (this.model.isLiked()){
        this.unlikePhoto(); 
      } else {
        this.likePhoto();
      }
    },

    likePhoto: function() {
      console.log("liked");
      this.model.like().save({photo_id: this.model.id});
      this.model.set({numLikes: this.model.get('numLikes') + 1});
    },

    unlikePhoto: function() {
      console.log("unliked");
      this.model.like().destroy();
      this.model.like().clear();
      this.model.set({numLikes: this.model.get('numLikes') - 1});
    },

    render: function() {
      var content = this.template({photo: this.model});
      this.$el.html(content);
      return this;
    },
});

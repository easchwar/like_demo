LikeDemo.Models.Photo = Backbone.Model.extend({
  urlRoot: "api/photos",

  like: function() {
    if (!this._like) {
      this._like = new LikeDemo.Models.Like();
    }
    return this._like;
  },

  isLiked: function() {
    return !this.like().isNew();
  },
  
  parse: function(response) {
    if (response.like) {
      this.like().set(response.like);
    }
    return response;
  },
});

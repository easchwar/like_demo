LikeDemo.Models.Photo = Backbone.Model.extend({
  urlRoot: "api/photos",

  like: function() {
    if (!this._like) {
      this._like = new LikeDemo.Models.Like();
    }
    return this._like;
  },
  
  parse: function(response) {
    console.log(response);
    if (response.like) {
      this.like().set(response.like);
    }
    return response;
  },
});

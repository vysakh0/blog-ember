Blog.PostsRoute = Ember.Route.extend({
  model: function(){
    return Blog.Post.find()
  }
});


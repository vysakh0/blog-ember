Blog.Post = Ember.Object.extend({
  title: DS.attr('string'),

  author: DS.attr('string'),

  intro: DS.attr('string'),

  extended: DS.attr('string')
});

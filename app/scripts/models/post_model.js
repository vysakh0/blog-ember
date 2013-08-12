Blog.Post = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  intro: DS.attr('string'),
  extended: DS.attr('string'),
  publishedAt: DS.attr('date')
});

Blog.Post.FIXTURES = [
{
  id: 1,
  title: "What????m",
  author: "Vysakh",
  publishedAt: new Date('4-8-2013'),
  intro: "This is just an intro",
  extended: "Yup it is :)"
},

{
  id: 2,
  title: "What????m",
  author: "Dale",
  publishedAt: new Date('4-8-2013'),
  intro: "This is just an intro from Dale",
  extended: "Wow!Yup it is :)"
}

];

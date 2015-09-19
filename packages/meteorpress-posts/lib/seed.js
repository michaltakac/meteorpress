Meteor.startup(() => {
  let title = "First post";

  var post = {
    title: title,
    slug: titleToSlug(title),
    post: "whatever"
  }

  if (Posts.find().fetch().length === 0) {
    Posts.insert(post);
  }
});

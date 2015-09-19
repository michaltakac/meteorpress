Meteor.publish('posts', () => {
	return Posts.find();
});

Meteor.publish('singlePost', (id) => {
	return Posts.find(id);
});

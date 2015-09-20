FlowRouter.route('/posts', {
	name: 'posts',
  action: function() {
    ReactLayout.render(BlogLayout, {
    	content: <Loop />
    });
  }
});

FlowRouter.route('/post/:_id', {
	name: 'post',
  action: function(params) {
    ReactLayout.render(BlogLayout, {
    	content: <PostLayout _id={params._id} />
    });
  }
});

FlowRouter.route(['/', '/home'], {
  action: function() {
    ReactLayout.render(BlogLayout, {
      content: <Loop />
    });
  }
});

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
    ReactLayout.render(PostLayout, {
    	postHeader: <PostHeader _id={params._id} />,
    	content: <PostBody _id={params._id} />
    });
  }
});


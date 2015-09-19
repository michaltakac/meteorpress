FlowRouter.route('/posts', {
  action: function() {
    ReactLayout.render(BlogLayout, {
    	content: <Loop />
    });
  }
});

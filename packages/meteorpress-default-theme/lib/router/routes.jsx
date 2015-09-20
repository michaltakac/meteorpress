FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(BlogLayout, {
      content: <Loop />
    });
  }
});

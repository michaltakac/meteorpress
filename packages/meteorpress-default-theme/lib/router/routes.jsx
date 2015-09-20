FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(BlogLayout, {
      content: <Home />
    });
  }
});

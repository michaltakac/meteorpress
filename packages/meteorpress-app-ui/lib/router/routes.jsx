FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(BlogLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params) {
        BlazeLayout.render("appLayout", {area: "dashboard"});
    }
});

FlowRouter.route('/dashboard/:postId', {
  name: 'post',
    action: function(params) {
        BlazeLayout.render("appLayout", {area: "dashboard"});
    }
});

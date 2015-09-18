FlowRouter.notfound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      BlazeLayout.render("notFound");
    }
};

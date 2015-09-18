FlowRouter.route('/', {
    name: 'home',
    action: function(params) {
        BlazeLayout.render("appLayout", {area: "home"});
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

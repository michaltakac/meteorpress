Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@mg.runelytics.com',
    password: 'f88acd0f6e0734f64b61b16432f9c6b2'
  });

  Meteor.methods({
    'sendContactEmail': function(name, email, message) {
      this.unblock();

      Meteor.Mailgun.send({
        to: 'takacmichal92@gmail.com',
        from: name + ' <' + email + '>',
        subject: 'New Contact Form Message',
        text: message,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
    }
  });
});

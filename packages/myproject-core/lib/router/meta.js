if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].meta.title
        title: 'My Project',
        suffix: 'myproject'
      }
  });
}

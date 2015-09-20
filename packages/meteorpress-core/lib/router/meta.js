if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].meta.title
        title: 'Meteorpress',
        suffix: 'meteorpress'
      }
  });
}

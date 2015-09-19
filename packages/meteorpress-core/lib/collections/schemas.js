SimpleSchema.debug = true;

Schemas = {};

Meteor.isClient && Template.registerHelper("Schemas", Schemas);

/**
 * Email service.
 *
 */
Package.describe({
  name: 'myproject:app-email',
  summary: 'Email configuration package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.1.0.3');

  var packages = [
    'myproject:lib', // no dependencies
    'cmather:handlebars-server@0.2.0', // rendering Handlebars templates on server
    'cunneen:mailgun' // Mailgun settings
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // server
  api.addFiles([
    'lib/server/email/templates/404.handlebars',
    'lib/server/email/templates/contactEmail.handlebars',
    'lib/server/email/config.js',
    'lib/server/account-urls.js' // trying to remove hash (#) from urls
  ], 'server');

});

Package.onTest(function (api) {
  api.use([
    'sanjo:jasmine@0.18.0',
    'myproject:app-email'
  ], ['client']);

});

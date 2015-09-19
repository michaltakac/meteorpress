/**
 * Admin panel.
 *
 */
Package.describe({
  name: 'meteorpress:app-admin',
  summary: 'Admin panel package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.2-rc.17');

  var packages = [
    'meteorpress:lib', // no dependencies
    'meteorpress:core'
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // server
  api.addFiles([

  ], 'server');

});

Package.onTest(function (api) {
  api.use([
    'sanjo:jasmine@0.18.0',
    'meteorpress:app-admin'
  ], ['client']);

});

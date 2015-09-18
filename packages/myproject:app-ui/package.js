/**
 * App UI.
 *
 */
Package.describe({
  name: 'myproject:app-ui',
  summary: 'App UI package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.1.0.3');

  var packages = [
    'myproject:lib', // no dependencies
    'myproject:core'
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // collections
  api.addFiles([
    'lib/client/collections/items.js'
  ], ['client', 'server']);

  // templates
  api.addFiles([
    'lib/client/layouts/_appHeader.html',
    'lib/client/layouts/_appHeader.js',
    'lib/client/layouts/_appFooter.html',
    'lib/client/layouts/appLayout.html',
    'lib/client/dashboard.html',
    'lib/client/dashboard.js',
    'lib/client/home.html'
  ], 'client');

  // routes
  api.addFiles([
    'lib/router/routes.js'
  ], 'client');

  // Last but not least.. (optional)
  api.export([
    'Items'
  ]);

});

Package.onTest(function (api) {
  api.use([
    'myproject:app-ui',
    'sanjo:jasmine@0.18.0'
  ], ['client']);

});

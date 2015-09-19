/**
 * CMS Core package
 *
 *
 */
Package.describe({
  name: 'meteorpress:core',
  summary: 'Core application package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.2-rc.17');

  // Here you add all your modules, and also define the load order by the way
  // you order them in this array. MAKE SURE app:lib always goes first!
  var packages = [
    'meteorpress:lib', // no dependencies
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addAssets([ // From Meteor v1.2, static HTML fles needs to be wrapped in addAssets.
    'lib/client/index.html',
    'lib/client/layouts/loading.html',
    'lib/client/layouts/notFound.html',
  ], 'client');

  api.addFiles([
    'lib/caching/cache.js',
    'lib/caching/defer-script-loading.js',
    'lib/helpers/helpers-ui.js',
    'lib/helpers/stringHelpers.js',
    'lib/client/compatibility/bootstrap.js'
  ], 'client');

  // client
  api.addFiles([
    'lib/accounts/config.js',
    'lib/collections/schemas.js',
    'lib/collections/collections.js',
  ], ['client', 'server']);

  // Routing
  api.addFiles([
    'lib/router/config.js',
    'lib/router/meta.js'
  ], 'client');

  // Last but not least.. (optional)
  api.export([
    'Schemas'
  ]);

});

Package.onTest(function (api) {
  api.use([
    'meteorpress:core',
    'sanjo:jasmine@0.18.0',
    'test-helpers',
    'reactive-dict'
  ], ['client']);

});

/**
 * CMS Core package
 * 
 *
 */
Package.describe({
  name: 'myproject:core',
  summary: 'Core application package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.1.0.3');

  // Here you add all your modules, and also define the load order by the way
  // you order them in this array. MAKE SURE app:lib always goes first!
  var packages = [
    'myproject:lib', // no dependencies
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addFiles([
    'lib/helpers/helpers-ui.js',
    'lib/helpers/stringHelpers.js',
    'lib/client/compatibility/bootstrap.js',
    'lib/client/index.html',
    'lib/client/layouts/loading.html',
    'lib/client/layouts/notFound.html',
  ], 'client');

  // client
  api.addFiles([
    'lib/accounts/config.js'
  ]);

  // Routing
  api.addFiles([
    'lib/router/config.js',
    'lib/router/meta.js'
  ], 'client');

  // Last but not least.. (optional)
  api.export([
    
  ]);

});

Package.onTest(function (api) {
  api.use([
    'myproject:core',
    'sanjo:jasmine@0.18.0',
    'test-helpers',
    'templating',
    'reactive-dict'
  ], ['client']);

});

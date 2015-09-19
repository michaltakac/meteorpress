/**
 * App stylesheets using Bootstrap with LESS.
 *
 */
Package.describe({
  name: 'myproject:app-styles',
  summary: 'App styles package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.2-rc.17');

  var packages = [
    'myproject:lib', // no dependencies
    'myproject:core',
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  // client
  api.addFiles([
    // We need to sort less compiling...
    //'lib/client/stylesheets/base/global.less',
  ], 'client');

});


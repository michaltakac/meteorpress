/**
 * App UI.
 *
 */
Package.describe({
  name: 'meteorpress:app-ui',
  summary: 'App UI package.',
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

  api.addAssets([
    //'lib/client/layouts/_appHeader.html',
    //'lib/client/layouts/_appFooter.html',
    //'lib/client/layouts/appLayout.html',
    //'lib/client/dashboard.html',
    //'lib/client/home.html'
  ], 'client');

  // collections
  api.addFiles([
    //'lib/client/collections/items.js'
  ], ['client', 'server']);

  // templates
  api.addFiles([
    'lib/client/layouts/header.jsx',
    'lib/client/layouts/footer.jsx',
    //'lib/client/dashboard.js',
    'lib/client/home.jsx'
  ], ['client', 'server']);

  // routes
  api.addFiles([
    'lib/router/routes.jsx'
  ], 'client');

  // Last but not least.. (optional)
  api.export([
    'BlogLayout'
  ]);

});

Package.onTest(function (api) {
  api.use([
    'meteorpress:app-ui',
    'sanjo:jasmine@0.18.0'
  ], ['client']);

});

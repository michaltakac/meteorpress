/**
 * Posts package.
 *
 */
Package.describe({
  name: 'meteorpress:posts',
  summary: 'Posts settings package.',
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

  // client
  api.addFiles([
    'lib/client/loop.jsx'
  ], 'client');

  // server
  api.addFiles([
  ], 'server');

  // Routes
  api.addFiles([
    'lib/router/routes.jsx'
  ], 'client');

});

Package.onTest(function (api) {
  api.use([
    'sanjo:jasmine@0.18.0',
    'meteorpress:posts'
  ], ['client']);

});

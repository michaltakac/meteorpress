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

  // Helpers
  api.addFiles([
    'lib/client/helpers/helpers.js'
  ], ['client', 'server']);

  // Collections, schema, helpers, TabularTables
  api.addFiles([
    'lib/collections/posts-collection.js',
    'lib/collections/posts-schema.js',
    //'lib/collections/posts-collection-helpers.js'
  ], ['client', 'server']);

  // client
  api.addFiles([

  ], 'client');

  // server
  api.addFiles([
    'lib/seed.js',
    'lib/server/publications/posts.js'
  ], 'server');

  api.export([
    'Posts'
  ]);
});

Package.onTest(function (api) {
  api.use([
    'sanjo:jasmine@0.18.0',
    'meteorpress:posts'
  ], ['client']);

});

/**
 * Admin panel main package
 *
 *
 */
Package.describe({
  name: 'meteorpress:admin',
  version: '1.0.0',
  summary: 'Meteor Flow-Admin package for use with Flow Router',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2-rc.17');

  both = ['client','server'];

  api.use([
    'meteorpress:lib', // no dependencies
    'meteorpress:core',
    'coffeescript',
    'underscore',
    'reactive-var',
    'meteorhacks:unblock@1.1.0',
    'zimme:active-route@2.3.0',
    'reywood:publish-composite@1.3.6',
    'aldeed:template-extension@3.4.3',
    'alanning:roles@1.2.13',
    'raix:handlebar-helpers@0.2.4',
    'aldeed:tabular@1.2.0',
    'mfactory:admin-lte@0.0.2',
    'perak:codemirror',
    'themeteorchef:commonmark',
    'deanius:promise',
    'themeteorchef:bert'
    ], both);

  api.use(['templating'],'client');

  api.use(['email'],'server');

  api.add_files([
    'lib/both/AdminDashboard.coffee',
    'lib/both/utils.coffee',
    'lib/both/startup.coffee',
    'lib/both/collections.coffee'
    ], both);

  api.add_files([
    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/fadmin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/html/markdown-editor.html',
    'lib/client/css/admin-custom.less',
    'lib/client/css/markdown-editor.css',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/templates.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/slim_scroll.js',
    'lib/client/js/autoForm.coffee',
    'lib/client/js/markdown-editor.js'
    ], 'client');

  api.add_files([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee',
    'lib/server/markdown-methods.js'
    ], 'server');

  api.add_files([
    'lib/admin-config.js'
  ], both);

  api.add_files([
    'lib/both/routes.js'
  ], 'client');

  api.export([
    'AdminDashboard',
    'AdminConfig'
  ], both);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteorpress:admin');
  api.addFiles('flow-db-admin-tests.js');
});

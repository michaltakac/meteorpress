/**
 * CMS Lib package
 *
 *
 */
Package.describe({
  name: 'myproject:lib', // All modules should api.use() this.
  summary: 'Application core library.',
  version: '1.0.0',
});

Package.onUse(function(api) {

  api.versionsFrom(['METEOR@1.1.0.3']);

  var packages = [
    'meteor-platform',
    'less',
    'accounts-password',
    'coffeescript',
    'fortawesome:fontawesome',
    'alanning:roles@1.2.11',
    'zimme:active-route',
    'dburles:collection-helpers',
    'reywood:publish-composite',
    'momentjs:moment',
    'underscorestring:underscore.string',
    'matb33:collection-hooks',
    'dburles:factory',
    'anti:fake',
    'underscore',
    'yasinuslu:blaze-meta',
    'aldeed:collection2@2.5.0',
    'aldeed:autoform@5.5.0',
    'arillo:flow-router-helpers',
    'kadira:blaze-layout',
    'kadira:flow-router',
    'useraccounts:bootstrap',
    'useraccounts:flow-routing',
    'meteortoys:allthings'
  ];

  api.use(packages);

  // Makes packages available in global context. If for some reason you don't
  // want that, just make 2 separate arrays above and don't imply one of them.
  // However, this is better done in app-core which still lets you manage
  // the namespaces of packages in the same way, but will still give your
  // modules access to them via global namespace.
  api.imply(packages);

  // Trick to set envrionment-specific packages. I personally use `direnv` to
  // automatically set the right environment vars for my meteor apps.
  if (process.env.IS_PRODUCTION) {
    api.use('xolvio:inspectlet');
    api.export('__insp');
  }


  // And now.. your files! I recommend you declare namespaces in your very first
  // file.
  api.addFiles([
    'lib/core.js',
    //'lib/babel.json'
  ], ['client', 'server']);


  api.export([
    'App',
    'Secondary',
    '_',
    'Meteor',
    'Template',
    'Blaze',
    'FlowRouter',
    'BlazeLayout',
    'AutoForm',
    'Roles',
    'AccountsTemplates',
    'SimpleSchema',
  ]);
});

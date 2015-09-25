/**
 * CMS Lib package
 *
 *
 */
Package.describe({
  name: 'meteorpress:lib', // All modules should api.use() this.
  summary: 'Application core library.',
  version: '1.0.0',
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.2.0.1');

  var packages = [
    'standard-minifiers',
    'meteor-base',
    'mobile-experience',
    'mongo',
    'blaze-html-templates', // we use blaze just for useraccounts package
    'session',
    'jquery',
    'tracker',
    'logging',
    'reload',
    'random',
    'ejson',
    'spacebars',
    'check',
    'less',
    'ecmascript',
    'react',
    'react-meteor-data',
    //'twbs:bootstrap', // We should use Bootstrap packaged by ourselves, because in future we
    // want to provide user-created templates (like Ghost themes or Wordpress themes, etc...)
    'accounts-password',
    'coffeescript',
    'fortawesome:fontawesome',
    'alanning:roles@1.2.11',
    'zimme:active-route',
    'dburles:collection-helpers',
    'reywood:publish-composite@1.4.2',
    'momentjs:moment',
    'underscorestring:underscore.string',
    'matb33:collection-hooks',
    'dburles:factory',
    'anti:fake',
    'underscore',
    'yasinuslu:blaze-meta@0.3.3',
    'aldeed:collection2@2.5.0',
    'aldeed:autoform@5.5.0',
    'arillo:flow-router-helpers',
    'kadira:blaze-layout@2.1.0',
    'kadira:react-layout@1.3.1',
    'kadira:flow-router-ssr@3.3.0',
    'useraccounts:bootstrap',
    'useraccounts:flow-routing',
    'msavin:mongol' // had some problems with meteortoys:allthings, especially with jetsetter
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
    'lib/core.js'
  ], ['client', 'server']);


  api.export([
    'Meteorpress',
    'Secondary',
    '_',
    'Meteor',
    'Template',
    'React',
    'FlowRouter',
    'ReactLayout',
    'AutoForm',
    'Roles',
    'AccountsTemplates',
    'SimpleSchema',
    'Schemas'
  ]);
});

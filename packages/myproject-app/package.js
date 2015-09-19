Package.describe({
  name: 'myproject:app',
  version: '1.0.0',
  summary: 'Main app umbrella package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2-rc.17');

  api.imply([
    'myproject:lib',
    'myproject:core',
    'myproject:app-ui',
    'myproject:app-styles',
    'myproject:app-email'
  ], ['client', 'server']);

});

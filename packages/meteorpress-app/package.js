Package.describe({
  name: 'meteorpress:app',
  version: '1.0.0',
  summary: 'Main app umbrella package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2-rc.17');

  api.imply([
    'meteorpress:lib',
    'meteorpress:core',
    'meteorpress:app-ui',
    'meteorpress:app-styles',
    'meteorpress:app-email'
  ], ['client', 'server']);

});

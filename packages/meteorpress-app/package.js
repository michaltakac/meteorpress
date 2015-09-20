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
    'meteorpress:app-email',
    'meteorpress:posts',
    'meteorpress:admin'
  ], ['client', 'server']);

  // Loading our new default theme, it needs to be loaded after admin panel,
  // or like here, separately
  api.imply([
    'meteorpress:default-theme'
  ], ['client', 'server']);

});

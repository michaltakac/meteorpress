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

  // Loading our new default theme :D
  api.imply([
    'meteorpress:default-theme'
  ], ['client', 'server']);

});

/**
 * Default theme for Meteorpress.
 *
 */
Package.describe({
  name: 'meteorpress:default-theme',
  summary: 'Default theme package.',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.2.0.1');

  var packages = [
    'meteorpress:lib', // no dependencies
    'meteorpress:core'
  ];

  api.use(packages); // all code => this package

  api.imply(packages); // this package => application

  api.addAssets([
    // TODO: Figure out how we should load image assets in package
    /*'assets/images/about-bg.jpg',
    'assets/images/contact-bg.jpg',
    'assets/images/home-bg.jpg',
    'assets/images/post-bg.jpg',
    'assets/images/post-sample-image.jpg'*/
  ], 'client');

  // Bootstrap Mixins ------------------------------------------------------
  api.addFiles([
    // Utilities
    'lib/client/stylesheets/base/lib/bootstrap/mixins/hide-text.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/opacity.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/image.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/labels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/reset-filter.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/resize.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/responsive-visibility.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/size.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/tab-focus.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/text-emphasis.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/text-overflow.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/vendor-prefixes.import.less',

    // Components
    'lib/client/stylesheets/base/lib/bootstrap/mixins/alerts.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/buttons.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/panels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/pagination.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/list-group.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/nav-divider.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/forms.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/progress-bar.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/table-row.import.less',

    // Skins
    'lib/client/stylesheets/base/lib/bootstrap/mixins/background-variant.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/border-radius.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/gradients.import.less',

    // Layout
    'lib/client/stylesheets/base/lib/bootstrap/mixins/clearfix.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/center-block.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/nav-vertical-align.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/grid-framework.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins/grid.import.less'
  ], 'client');

  // Bootstrap ------------------------------------------------------
  api.addFiles([
    // Core variables and mixins
    'lib/client/stylesheets/base/lib/bootstrap/variables.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/mixins.import.less',

    // Reset and dependencies
    'lib/client/stylesheets/base/lib/bootstrap/normalize.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/print.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/glyphicons.import.less',

    // Core CSS
    'lib/client/stylesheets/base/lib/bootstrap/scaffolding.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/type.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/code.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/grid.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/tables.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/forms.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/buttons.import.less',

    // Components
    'lib/client/stylesheets/base/lib/bootstrap/component-animations.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/dropdowns.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/button-groups.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/input-groups.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/navs.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/navbar.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/breadcrumbs.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/pagination.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/pager.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/labels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/badges.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/jumbotron.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/thumbnails.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/alerts.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/progress-bars.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/media.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/list-group.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/panels.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/responsive-embed.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/wells.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/close.import.less',

    // Components w/ JavaScript
    'lib/client/stylesheets/base/lib/bootstrap/modals.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/tooltip.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/popovers.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/carousel.import.less',

    // Utility classes
    'lib/client/stylesheets/base/lib/bootstrap/utilities.import.less',
    'lib/client/stylesheets/base/lib/bootstrap/responsive-utilities.import.less',

    'lib/client/stylesheets/base/lib/bootstrap/bootstrap.import.less',
  ], 'client');

  // OUR STYLES ------------------------------------------------------
  api.addFiles([
    // Variables
    'lib/client/stylesheets/base/variables.import.less',
    // Mixins
    'lib/client/stylesheets/base/mixins.import.less',
    // Theme styles
    'lib/client/stylesheets/base/default-theme.import.less',
    // Global imports in this file
    'lib/client/stylesheets/base/global.less',
  ], 'client');

  // END OF STYLES --------------------------------------------------

  // collections
  api.addFiles([
    //'lib/client/collections/items.js'
  ], ['client', 'server']);

  // templates
  api.addFiles([
    // Layouts
    'lib/client/components/layouts/blog-layout.jsx',
    'lib/client/components/layouts/post-layout.jsx'
  ], ['client', 'server']);

  api.addFiles([
    // Shared components
    'lib/client/components/shared/header.jsx',
    'lib/client/components/shared/footer.jsx'
  ], ['client', 'server']);

  api.addFiles([
    // Posts loop components
    'lib/client/components/loop/loop.jsx',
    'lib/client/components/loop/post-excerpt.jsx'
  ], ['client', 'server']);

  api.addFiles([
    // Post components
    'lib/client/components/post/post-body.jsx',
    'lib/client/components/post/post-header.jsx'
  ], ['client', 'server']);

  // routes
  api.addFiles([
    'lib/router/routes.jsx'
  ], 'client');

  api.export([
    'Header',
    'BlogLayout',
    'PostLayout',
    'Loop',
    'PostHeader',
    'PostBody',
    'PostExcerpt'
  ]);

});

Package.onTest(function (api) {
  api.use([
    'meteorpress:default-theme',
    'sanjo:jasmine@0.18.0'
  ], ['client']);
});

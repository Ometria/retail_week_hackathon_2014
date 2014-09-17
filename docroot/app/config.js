require.config({
  baseUrl: 'app',
  shim: {
    'templates': ['handlebars'],
    'bootstrap': ['jquery']
  },
  paths: {
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    jquery: '../bower_components/jquery/dist/jquery',
    masonry: '../bower_components/masonry/masonry',
    requirejs: '../bower_components/requirejs/require',
    page: '../bower_components/page.js/index',
    templates: 'templates',
    homeView: 'views/home',
    listsView: 'views/lists',
    notFoundView: 'views/404',
    handlebars: '../bower_components/handlebars/handlebars.min'
  },
  deps: [
    'main',
    'templates',
    'bootstrap',
    'page'
  ],
  packages: [

  ]
});

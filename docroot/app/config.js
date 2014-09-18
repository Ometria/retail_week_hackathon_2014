require.config({
  baseUrl: '/app',
  shim: {
    'templates': ['handlebars'],
    'bootstrap': ['jquery'],
  },
  paths: {
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    jquery: '../bower_components/jquery/dist/jquery',
    masonry: '../bower_components/masonry/dist/masonry.pkgd',
    requirejs: '../bower_components/requirejs/require',
    page: '../bower_components/page.js/index',
    handlebars: '../bower_components/handlebars/handlebars.min',
    templates: 'templates',
    homeView: 'views/homeView',
    listView: 'views/listView',
    notFoundView: 'views/404',
    listsCollection: 'models/lists',
    listModel: 'models/list',
    model: 'models/Model',
    dispatcher: 'dispatcher/Dispatcher',
    controller: 'views/Controller',
    api: 'utils/Api',
    behaviours: 'utils/Behaviours',
    utils: 'utils/Utils',
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

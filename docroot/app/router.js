define(['homeView', 'listView', 'notFoundView'], function(homeView, listView, notFoundView){
  var _activeView;

  return function(){
    var routes = {
      '': 'home',
      '/lists/:id': 'list',
      '*': 'notfound'
    };

    this.setActiveView = function(view){
      if(_activeView === view) return;
      var viewId = view._id;

      if(_activeView) {
        $(_activeView).trigger('view:deactivate');
        app.root.find('.page.in').removeClass('in');
      }

      if(!app.root.find('.page.' + viewId).length){
        app.root
          .append(view.el);
        }

      _activeView = view;
    };

    // Route Handlers
    this.home = function(){
        app.activeView = {home: true};
        this.setActiveView(homeView);
        $(homeView).trigger('view:activate');
    };

    this.list = function(page){
        app.activeView = {list: true};
        this.setActiveView(listView);
        $(listView).trigger('view:activate', [page.params]);
    };

    this.notfound = function(){
        app.activeView = {};
        app.root.html(notFoundView.el);
    };

    // route assignment
    for(var route in routes){
      page(route, this[routes[route]].bind(this));
    }

    page();

    // navigate function - exposed by app.navigate
    this.navigate = function(url){
      history.pushState(null, null, '/'+url);
      page('/'+url);
    };
  };

});
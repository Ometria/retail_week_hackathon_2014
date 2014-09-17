define(['homeView', 'listsView', 'notFoundView'], function(homeView, listsView, notFoundView){
  return function(){
    var routes = {
      '': 'home',
      '/lists': 'lists',
      '*': 'notfound'
    };

    // Route Handlers
    this.home = function(){
        app.root.html(homeView.render());
    };

    this.lists = function(){
        app.root.html(listsView.render());
    };

    this.notfound = function(){
        app.root.html(notFoundView.render());
    };

    // route assignment
    for(var route in routes){
      page(route, this[routes[route]]);
    }

    page();

    //
    this.navigate = function(url){
      history.pushState(null, null, '/'+url);
    };
  };

});
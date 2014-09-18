define(['jquery', 'dispatcher', 'controller'], function($, Dispatcher, Controller){
  var homeController = Controller.init(function(){
    this.template = templates.home;

    this.initialize = function(){
      Dispatcher.register(this.actionReceived, this);
      app.lists.fetch();
    };

    this.actionReceived = function(action){
      switch(action.actionType){
        case('lists.GET'):
          this.render(action.payload);
        break;
      }
    };

    this.activate = function(){
      this.show();
    };

    this.render = function(data){
      data.lists.forEach(function(list){
        list.products =  list.products ?
          list.products.splice(0, 5) : [];
      });

      this.el.empty().append(this.template({app: app, lists: data.lists}));
      this.show();
    };
  });

  return homeController;
});
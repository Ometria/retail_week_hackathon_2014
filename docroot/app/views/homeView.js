define(['jquery', 'dispatcher', 'controller'], function($, Dispatcher, Controller){
  var homeController = Controller.init(function(){
    this.template = templates.home;

    this.initialize = function(){
      Dispatcher.register(this.actionReceived, this);
      app.lists.poll();
      this._active = true;
    };

    this.actionReceived = function(action){
      switch(action.actionType){
        case('lists.GET'):
          if(!this.data || action.payload.lists.length != this.data.lists.length)
            this.render(action.payload);
        break;
      }
    };

    this.activate = function(){
      this._active = true;
      if(app.lists.pollTimeout) clearTimeout(app.lists.pollTimeout);
      app.lists.poll();
      this.show();
    };

    this.deactivate = function(){
      this._active = false;
      if(app.lists.pollTimeout) clearTimeout(app.lists.pollTimeout);
    };


    this.render = function(data){
      data.lists.forEach(function(list){
        list.products =  list.products ?
          list.products.splice(0, 5) : [];
      });

      this.data = data;

      this.el.empty().append(this.template({app: app, lists: data.lists}));
      this.show();
    };
  });

  return homeController;
});
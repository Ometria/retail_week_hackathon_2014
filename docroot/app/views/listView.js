define(['jquery', 'controller', 'dispatcher', 'listModel'], function($, Controller, Dispatcher, List){
  var listController = Controller.init(function(){
    this.template = templates.lists;
    this.productModal = templates.product;

    this.events = {
      'click .product': 'triggerModal'
    };

    this.initialize = function(data){
      Dispatcher.register(this.actionReceived, this);
      this.activate(data);
      this._active = true;
    };

    this.actionReceived = function(action){
      switch(action.actionType){
        case('list.GET'):
          if(!this.products || action.payload.products.length != this.products.length)
            this.render(action.payload);
        break;
      }
    };

    this.activate = function(data){
      this._active = true;
      if(app.list && app.list.pollTimeout)
        clearTimeout(app.list.pollTimeout);
      // loading new data....
      app.list = new List(data.id);
      app.list.poll();
      this.el.empty();
    };

    this.deactivate = function(){
      this._active = false;
      if(app.list.pollTimeout)
        clearTimeout(app.list.pollTimeout);

      $('body').css({'backgroundColor': ''});
    };

    this.render = function(data){
      data.products.forEach(function(p){
        if(Math.random()>0.5) p.retail = true;
      });

      this.products = data.products;

      this.el.empty().append(this.template({app: app, products: data.products}));
      this.show();
    };

    this.show = function(){
      var _this = this;
      setTimeout(function(){
        _this.el.addClass('in');
      },1);
    };

    this.triggerModal = function(el){
      var i = $(el).attr('data-index'),
          product = this.products[i];

      var modal = $(this.productModal({product: product}));
      $('body #productModal').remove();
      $('body').append(modal);

      $('#productModal').modal();
      $('#productModal').on('click', '.btn-primary', function(){
        window.location.href = product.url;
      });
    };

  });

  return listController;
});
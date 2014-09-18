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
    };

    this.actionReceived = function(action){
      switch(action.actionType){
        case('list.GET'):
          this.render(action.payload);
        break;
      }
    };

    this.activate = function(data){
      if(!app.list || data.id !== app.list.id){
        // loading new data....
        app.list = new List(data.id);
        app.list.fetch();
        this.el.empty();
      } else {
        // I have the right data, just show
        this.show();
      }
    };

    this.deactivate = function(){
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
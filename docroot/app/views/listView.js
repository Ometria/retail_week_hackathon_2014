define(['jquery', 'controller', 'dispatcher', 'listModel', 'userModel'], function($, Controller, Dispatcher, List, User){
  var listController = Controller.init(function(){
    this.template = templates.lists;
    this.productModal = templates.product;
    this.shareModal = templates.share;

    this.events = {
      'click .product': 'triggerModal',
      'click .share-button': 'triggerShareModal'
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
        case('user.GET'):
          this.currentUser = action.payload;
          this.displayShareModal();
        break;
      }
    };

    this.activate = function(data){
      this._active = true;
      if(app.list && app.list.pollTimeout)
        clearTimeout(app.list.pollTimeout);
      // loading new data....
      app.list = new List(data.id);
      this.el.empty();
      app.list.poll();
    };

    this.deactivate = function(){
      this._active = false;
      if(app.list.pollTimeout)
        clearTimeout(app.list.pollTimeout);

      this.products  = null;

      $('body').css({'backgroundColor': ''});
    };

    this.render = function(data){
      data.products.forEach(function(p){
        if(Math.random()>0.5) p.retail = true;
      });

      this.products = data.products;

      this.el.empty().append(this.template({app: app, products: data.products, list: data.list}));
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

      $('#productModal').on('click', '.btn-danger', function(){
        $('#productModal').modal('hide');
        $(el).fadeOut();
        app.list.removeProduct(product.pid);
      });
    };

    this.triggerShareModal = function(){
      (new User()).fetch();
    },

    this.displayShareModal = function(el){
      var modal = $(this.shareModal({user: this.currentUser}));
      $('body #shareModal').remove();
      $('body').append(modal);

      $('#shareModal').modal();

    };

  });

  return listController;
});
// RETAILER ADAPTER

// REQUIRED METHODS TO IMPLEMENT:

// 1. isProductPage()

// Condition for applying John Lewis adapter
if (window.location.host === 'www.johnlewis.com') {
  // Store retailer identity
  hack.retailer = 'johnlewis';

  console.info('Loaded John Lewis Adapter');

  var lib = {
    // Product page matching
    isProductPage: function(){
      // Check the meta tag on the john lewis product pages
      this._productPage = this._productPage || $("meta[property='og\\:type']").attr('content') === 'Product';
      
      return this._productPage;
    },

    // Product List Matching
    isProductList: function(){
      // Check the meta tag on the john lewis product pages
      this._listPage = this._listPage || document.getElementById('product-grid') !== null;

      return this._listPage;
    },

    // apply tag to product listing
    applyTag: function(){
      var products  = [],
          className = '',
          textPre   = '',
          textPost  = '';

      hack.tags = $();

      // Locate the wishlist tag on the product page
      if (lib.isProductPage()) {
        className = 'product-page';
        textPre   = 'Click to Stash!';
        products  = $('.wish-list-links-wrapper');//.html(hack.tag);        
      }

      // Locate the wishlist tag on the list page
      if (lib.isProductList()) {
        className = 'list-page';
        textPre   = 'Stash';
        products  = $('.compare-item-control-container');//.html(hack.tag);        
      }

      // Check if there is any elements in the tags selection
      if (products.length) {
        products.each(function(index, product){
          var tag = $('<span class="add-to-wish-list"><span class="stashed">Stashed!</span><span class="stash">' + textPre + '</span></span>');

          tag.addClass(className);

          tag.click({tag: tag}, hack.lib.button.stash);

          $(product).empty().append(tag);
        });

        hack.tags = $('span.add-to-wish-list');
      }
    },

    productId: function(product, container){
      if (!!container && hack.adapter.isProductList()) {
        var pid = Number(container.children('a').attr('id').split('-')[0]);
        return pid;
      }

      if (hack.adapter.isProductPage()) {
        return Number(window.location.pathname.slice(window.location.pathname.lastIndexOf('/p') + 2));
      }

      if (hack.adapter.isProductList()) {
        var pid = [];

        $('#product-grid article > .product-link').map(function(index, product){
          pid.push(Number(product.id.split('-')[0]));
        });

        return pid;
      }
    },

    productPrice: function(product){
      var price;

      if (hack.adapter.isProductPage()) {
        price = $('#prod-price p.price strong').text();
      }

      if (hack.adapter.isProductList()) {
        price = product.find('p.price strong').text();
      }
      
      return parseFloat(price.trim(' ').slice(1));
    },

    productTitle: function(product){
      if (hack.adapter.isProductPage()) {
        return $('#prod-title span').text();
      }

      if (hack.adapter.isProductList) {
        return product.find('strong').first().text();
      }
    },

    productImage: function(product){
      if (hack.adapter.isProductPage()) {
        return window.location.protocol + $('#prod-media-player .media-player ul li img').first().attr('src');
      }

      if (hack.adapter.isProductList()) {
        return window.location.protocol + product.find('.qv-image-holder img').attr('src');
      }
    },

    productUrl: function(){

    },

    productProperties: function(product){
      var p;

      if (hack.adapter.isProductList) {
        p = product.parents('article');
      }

      var params = {
        retailer: hack.retailer,
        pid     : hack.adapter.productId(product, p),
        p_price : hack.adapter.productPrice(p),
        p_image : hack.adapter.productImage(p),
        p_title : hack.adapter.productTitle(p),
        p_url   : hack.adapter.productTitle(p)
      };

      return params;
    },

    productStatus: function(){
      return {
        retailer: hack.retailer,
        pid     : hack.adapter.productId()
      };
    },

    tagStatus: function(status){
      if (hack.adapter.isProductPage() && status.length) {
        hack.tags.addClass('active');   
      }        

      if (hack.adapter.isProductList()) {
        hack.tags.filter(function(){
          return status.indexOf($(this).parents('article').find('.product-link').attr('id').split('-')[0]) >= 0;
        }).addClass('active');
      }

      // ids.forEach(function(id){
      //   console.log(id);
      //   if (ids[id]) {
      //     console.log(id);
      //     hack.tag.toggleClass('active', status);   
      //   }
      // });
    }
  };

  hack.adapter = lib;
}
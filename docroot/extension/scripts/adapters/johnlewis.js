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
      return $("meta[property='og\\:type']").attr('content') === 'Product';
    },

    // Product List Matching
    isProductList: function(){
      // Check the meta tag on the john lewis product pages
      return true;
    },

    // apply tag to product listing
    applyTag: function(){
      var tag = $('<a class="add-to-wish-list">Stash It!</button>');

      tag.click({params: hack.adapter.productProperties()}, hack.lib.api.stash);

      // Locate the wishlist tag on the product page
      $('.wish-list-links-wrapper').html(tag);
    },

    productId: function(){
      if (hack.adapter.isProductPage()) {
        return Number(window.location.pathname.slice(window.location.pathname.lastIndexOf('/p') + 2));
      }
    },

    productPrice: function(){
      if (hack.adapter.isProductPage()) {
        return parseFloat($('#prod-price p.price strong').text().trim(' ').slice(1));
      }
    },

    productTitle: function(){
      if (hack.adapter.isProductPage()) {
        return $('#prod-title span').text();
      }
    },

    productImage: function(){
      if (hack.adapter.isProductPage()) {
        return window.location.protocol + $('#prod-media-player .media-player ul li img').first().attr('src');
      }
    },

    productProperties: function(){
      // Title,
      // Image,
      // Price
      // URL
      // Product ID

      return {
        retailer: hack.retailer,
        pid     : hack.adapter.productId(),
        p_price : hack.adapter.productPrice(),
        p_image : hack.adapter.productImage(),
        p_title : hack.adapter.productTitle(),
        p_url   : window.location.origin + window.location.pathname
      };
    },

    productStatus: function(){
      return {
        retailer: hack.retailer,
        pid     : hack.adapter.productId()
      };
    },

    tagStatus: function(data){
      console.log('data from tag status', data);
    }
  };

  hack.adapter = lib;
}
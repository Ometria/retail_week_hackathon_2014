// Only do anything if jQuery isn't defined
if (typeof jQuery == 'undefined') {

  if (typeof $ == 'function') {
    // warning, global var
    thisPageUsingOtherJSLibrary = true;
  }
  
  function getScript(url, success) {
  
    var script     = document.createElement('script');
         script.src = url;
    
    var head = document.getElementsByTagName('head')[0],
    done = false;
    
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function() {
    
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      
      done = true;
        
        // callback function provided as param
        success();
        
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
        
      }
    
    };
    
    head.appendChild(script);
  
  }
  
  getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js', function() {
  
    if (typeof jQuery=='undefined') {
    
      // Super failsafe - still somehow failed...
    
    } else {
    
      // jQuery loaded! Make sure to use .noConflict just in case
      fancyCode();
      
      if (thisPageUsingOtherJSLibrary) {

        // Run your jQuery Code

      } else {

        // Use .noConflict(), then run your jQuery Code

      }
    
    }
  
  });
  
} else { // jQuery was already loaded
  
  // Load CSS file
  function loadStyles(){
    console.log('Load Style Files');
    var link = document.createElement( "link" );

    link.href = "http://localhost:8080/extension/extension.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
  }

  loadStyles();

  var hack = {};



// Common extension components

// Append to hack library
hack.lib = hack.lib || {};

hack.lib.api = {
  stash: function(event){
    var url = 'http://hackathon.random.ometria.com/api/show/add_product_to_list.php?' + $.param(event.data.params);

    window.open(url, 'hack_popup', "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,height=500,width=425");
  },

  status: function(params, callback){
    var url = 'http://hackathon.random.ometria.com/api/check_product.php?' + $.param(params);
   
     // JSONP callback handler
     window.stash_status = function(status){
      hack.lib.active = status.listed ? true : false;
      hack.adapter.tagStatus(hack.lib.active);
     };

    $.ajax(url, {
      jsonp: 'stash_status',
      dataType: 'jsonp'
    });
  }
};
console.log('CONSOLE LOG FROM BUTTON');
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
// Extension bootstrapping handler
hack.bootstrap = function(){
  console.log('The Bootstrap is called!');

  // Get the product stash status
  hack.lib.api.status(hack.adapter.productStatus(), hack.adapter.tagStatus);

  // Apply the tags!
  hack.adapter.applyTag();
};
// Bootstrap the extension
hack.bootstrap();

}
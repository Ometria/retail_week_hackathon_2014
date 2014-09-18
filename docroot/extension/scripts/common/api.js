// Common extension components

// Append to hack library
hack.lib = hack.lib || {};

hack.lib.api = {
  stash: function(params){
    return 'http://hackathon.random.ometria.com/api/show/add_product_to_list.php?' + $.param(params);

    // window.open(url, 'hack_popup', "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,height=500,width=425");
  },

  status: function(params, callback){
    var url = 'http://hackathon.random.ometria.com/api/check_product.php?' + $.param(params);
   
     // JSONP callback handler
     window.stash_status = function(status){
      hack.adapter.tagStatus(status);
      hack.tags.addClass('loaded');
     };

    $.ajax(url, {
      jsonp: 'stash_status',
      dataType: 'jsonp'
    });
  }
};
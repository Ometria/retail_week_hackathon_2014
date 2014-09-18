define(['jquery'], function($){
  return {
    get: function(url, params, fn){
      $.ajax(
        url, {
          data: $.extend(params, {noCache: new Date().getTime()}),
          xhrFields: {withCredentials: true},
          success: function(data){ fn(data); },
          type: 'GET',
          crossDomain: true
      });
    }
  };
})
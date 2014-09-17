define(['jquery'], function($){
  return {
    template: '<h1>404 - Not Found</h1>',
    render: function(){
      return $(this.template);
    }
  };
});
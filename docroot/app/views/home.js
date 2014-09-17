define(['jquery'], function($){
  return {
    template: templates.home(),
    render: function(){
      return $(this.template);
    }
  };
});
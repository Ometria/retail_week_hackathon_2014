define(['jquery'], function($){
  return {
    template: templates.lists(),
    render: function(){
      return $(this.template);
    }
  };
});
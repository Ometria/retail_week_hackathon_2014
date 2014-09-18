define(['dispatcher', 'api'], function(Dispatcher, Api){
  return {
    params: {},
    fetch: function(){
      var _this = this;
      Api.get(this.url, this.params, function(data){
        Dispatcher.dispatch({
          actionType: _this.modelId+'.GET',
          payload: data
        });
      });
    }
  };
});
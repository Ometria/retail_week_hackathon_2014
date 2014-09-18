define(['dispatcher', 'api'], function(Dispatcher, Api){
  return {
    params: {},
    fetch: function(){
      var _this = this;
      Api.get(this.url, this.params, function(data){
        _this._data = data;
        Dispatcher.dispatch({
          actionType: _this.modelId+'.GET',
          payload: data
        });
      });
    },
    poll: function(){
      var _this = this;
      this.pollTimeout = setTimeout(function(){
        Api.get(_this.url, _this.params, function(data){
          _this._data = data;
          Dispatcher.dispatch({
            actionType: _this.modelId+'.GET',
            payload: data
          });
          _this.poll();
        });
      }, 1000);
    },

    getData: function(){
      return this._data;
    }
  };
});
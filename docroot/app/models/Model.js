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

      function _poll(){
        Api.get(_this.url, _this.params, function(data){
          _this._data = data;
          Dispatcher.dispatch({
            actionType: _this.modelId+'.GET',
            payload: data
          });
          _this.pollTimeout = setTimeout(function(){
            _this.poll();
          }, 1500);
        });
      };


      _poll();
    },

    getData: function(){
      return this._data;
    }
  };
});
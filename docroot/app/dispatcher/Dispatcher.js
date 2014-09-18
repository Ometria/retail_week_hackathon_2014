define([], function(){
  return {
    _callbacks: [],
    _contexts: [],
    dispatch: function(action){
      var _this = this;
      this._callbacks.forEach(function(cb, i){
        cb.call(_this._contexts[i], action);
      });
    },
    register: function(fn, cxt){
      this._callbacks.push(fn);
      this._contexts.push(cxt);
    }
  };
});
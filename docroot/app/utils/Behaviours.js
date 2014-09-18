define(['jquery'], function($){
  return {
    _behaviours: {
      '[data-navigate]': 'navigateTo'
    },
    actions: {
      navigateTo: function(els, attr){
        els.each(function(i, el){
          var $el = $(el);
          var data = $el.attr(attr.replace(/\[(.*)\]/, '$1'));
          $el.on('click', function(){ console.log('click', data); app.navigate(data); });
        });
      }
    },
    append: function(){
      for(var behaviour in this._behaviours){
        var els = $(behaviour);
        this.actions[this._behaviours[behaviour]].call(null, els, behaviour);
        this.release(behaviour, els);
      }
    },
    release: function(behaviour, els){
      //els.removeAttr(behaviour.replace(/\[(.*)\]/, '$1'));
    }
  }
});
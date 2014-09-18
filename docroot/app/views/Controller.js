define(['jquery', 'behaviours', 'utils'], function($, Behaviours, Utils){
  return {
    init: function(controller){
      // fill with prototype stuff
      controller.prototype = {
        el: $('<div class="page"/>'),
        initialize: function(){},
        activate: function(){},
        deactivate: function(){},
        show: function(){
          var _this = this;
          setTimeout(function(){_this.el.addClass('in');}, 1);
        }
      };

      // Create this instance
      var instance = new controller();

      instance._id = Utils.createHash();
      instance.el.addClass(instance._id);

      // Overwritting render to append some behaviours
      instance._render = instance.render;
      instance.render = function(){
        if(!this._active) return;
        instance._render.apply(instance, arguments);
        Behaviours.append();
      };

      // Attaching events
      for(var evt in instance.events){
        var action = evt.split(' ')[0];
        var selector = evt.split(' ')[1];
        var fn = instance[instance.events[evt]].bind(instance);
        instance.el.on(action, selector, function(e){
          fn.call(instance, this);
        });
      };


      $(instance).on('view:activate', function(e, data){
        if(!instance.created){
          instance.initialize(data);
          instance.created = true;
        } else {
          instance.activate(data);
        }
      });

      $(instance).on('view:deactivate', function(e){
        instance.deactivate();
      });

      return instance;
    }
  };
})
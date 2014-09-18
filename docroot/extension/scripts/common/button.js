// Common extension components

// Append to hack library
hack.lib = hack.lib || {};

hack.lib.button = {
  stash: function(params, callback){
    // Toggle the 'stashed' class on the button
    hack.tag.addClass('active');

    $(hack.tag).tooltipster('show');
  }
};
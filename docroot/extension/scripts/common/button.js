// Common extension components

// Append to hack library
hack.lib = hack.lib || {};

hack.lib.button = {
  stash: function(e){
    // Toggle the 'stashed' class on the button
    e.data.tag.addClass('active');

    e.preventDefault();
    e.stopPropagation();
    return false;
    // event.data.tag.tooltipster('show');
  },
  content: function(origin, next){
    // Get iFrame URL
    var frameSrc = hack.lib.api.stash(hack.adapter.productProperties(origin)) + '&mode=popup';

    origin.tooltipster('content', $('<iframe frameborder=0 sandbox="allow-scripts" scrolling="yes" height="500" id="stash-popup" width="425" src="' + frameSrc + '"></iframe>'));

    next();
  }
};
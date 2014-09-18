// Extension bootstrapping handler
hack.bootstrap = function(){
  // Get the product stash status
  hack.lib.api.status(hack.adapter.productStatus(), hack.adapter.tagStatus);

  // Apply the tags!
  hack.adapter.applyTag();

  // Get iFrame URL
  var frameSrc = hack.lib.api.stash(hack.adapter.productProperties());

  // Initialize the popover
  $(hack.tag).tooltipster({
    content: $('<iframe frameborder=0 sandbox="allow-scripts" scrolling="yes" height="500" width="425" src="' + frameSrc + '"></iframe>'),
    // setting a same value to minWidth and maxWidth will result in a fixed width
    minWidth: 425,
    maxWidth: 425,
    trigger: 'click',
    // positionTracker: true,
    interactive: true,
    position: 'top-right',
    offsetX: -hack.tag.width() 
  });

  hack.tag.click(function(){
    $(hack.tag).tooltipster('show');
  });
};
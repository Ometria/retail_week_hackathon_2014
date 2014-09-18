// Extension bootstrapping handler
hack.bootstrap = function(){
  // Get the product stash status
  hack.lib.api.status(hack.adapter.productStatus(), hack.adapter.tagStatus);

  // Apply the tags!
  hack.adapter.applyTag();

  // Initialize the popover
  $(hack.tag).tooltipster({
    content: '',
    // setting a same value to minWidth and maxWidth will result in a fixed width
    minWidth: 425,
    maxWidth: 425,
    trigger: 'click',
    // positionTracker: true,
    interactive: true,
    position: 'top-right',
    offsetX: -hack.tag.width(),
    functionBefore: hack.lib.button.content
  });

  hack.tag.click(function(){
    $(hack.tag).tooltipster('show');
  });
};
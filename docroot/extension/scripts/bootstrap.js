// Extension bootstrapping handler
hack.bootstrap = function(){
  console.log('The Bootstrap is called!');

  // Get the product stash status
  hack.lib.api.status(hack.adapter.productStatus(), hack.adapter.tagStatus);

  // Apply the tags!
  hack.adapter.applyTag();
};
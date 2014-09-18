define(['jquery', 'model'], function($, Model){
  var ListCollection = function(id){
    this.id = id;
    this.modelId = 'list';
    this.url = 'http://hackathon.random.ometria.com/api/get_products.php';
    this.params = {list: id};
  };

  ListCollection.prototype = Model;
  return ListCollection;
});
define(['jquery', 'model', 'api'], function($, Model, Api){
  var ListCollection = function(id){
    this.id = id;
    this.modelId = 'list';
    this.url = 'http://hackathon.random.ometria.com/api/get_products.php';
    this.params = {list: id};

    this.removeProduct = function(pId){
      Api.get('http://hackathon.random.ometria.com/api/add_product_to_list.php',{
        retailer: 'johnlewis',
        pid: pId,
        remove: true,
        list: this.id
      }, function(){});
    };
  };

  ListCollection.prototype = Model;
  return ListCollection;
});
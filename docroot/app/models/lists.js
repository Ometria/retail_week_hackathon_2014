define(['jquery', 'model'], function($, Model){
  var ListsCollection = function(){
    this.modelId = 'lists';
    this.url = 'http://hackathon.random.ometria.com/api/get_lists.php?extended=true';
  };

  ListsCollection.prototype = Model;
  return ListsCollection;
});
define(['jquery', 'model', 'api'], function($, Model, Api){
  var UserModel = function(){
    this.modelId = 'user';
    this.url = 'http://hackathon.random.ometria.com/api/current_user.php';
  };

  UserModel.prototype = Model;
  return UserModel;
});


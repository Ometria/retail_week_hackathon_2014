define(['jquery', './router', 'listsCollection', 'dispatcher'], function($, Router, ListsCollection, Dispatcher){
  var app = window.app = {

    // Blast Off and Run!
    blastOff: function(){
      var _this = this;

      this.root = $('[data-hook="app"]');

      this.lists = new ListsCollection();

      Dispatcher.register(function(action){
        switch(action.actionType){
          case 'lists.GET':
            _this.buildListDropdown(action.payload);
          break;
        }
      });

      this.router = new Router();

      console.log('blastoff!');
      this.lists.fetch();
    },

    buildListDropdown: function(data){
      if((!app.dropdowns || data.lists.length != app.dropdowns.lists.length) && $('.page.in .dropdown-lists').length){
        var listElms = [];
        data.lists.forEach(function(list){
          var lElm = $('<li><a href="/lists/' + list.id + '">'+ list.title +'</a></li>');
          listElms.push(lElm);
        });

        $('.page.in .dropdown-lists').empty().append(listElms);

        app.dropdowns = data;
      }
    },

    // This is how you navigate around the app.
    // this gets called by a global click handler that handles
    // all the <a> tags in the app !
    navigate: function (page) {
      var url = (page.charAt(0) === '/') ? page.slice(1) : page;
      this.router.navigate(url, {trigger: true});
    }
  };

  app.blastOff();
});
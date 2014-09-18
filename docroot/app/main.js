define(['jquery', './router', 'listsCollection', 'dispatcher'], function($, Router, ListsCollection, Dispatcher){
  var app = window.app = {

    // Blast Off and Run!
    blastOff: function(){
      console.log('blastoff');
      this.root = $('[data-hook="app"]');

      this.lists = new ListsCollection();

      this.router = new Router();

      // for API calls
      this.baseUrl = '';
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
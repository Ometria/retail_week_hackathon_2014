// Only do anything if jQuery isn't defined
if (true /*typeof jQuery == 'undefined'*/) {

  // if (typeof $ == 'function') {
  //   // warning, global var
  //   thisPageUsingOtherJSLibrary = true;
  // }
  
  function getScript(url, success) {
  
    var script     = document.createElement('script');
         script.src = url;
    
    var head = document.getElementsByTagName('head')[0],
    done = false;
    
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function() {
    
      if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
      
      done = true;
        
        // callback function provided as param
        success();
        
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
        
      }
    
    };
    
    head.appendChild(script);
  
  }
  
  getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js', function() {
  console.log('Loading jQuery');
    if (typeof jQuery=='undefined') {
    
      // Super failsafe - still somehow failed...
    
    } else {
    
    //   // jQuery loaded! Make sure to use .noConflict just in case
    //   // fancyCode();
      
    //   if (thisPageUsingOtherJSLibrary) {

    //     // Run your jQuery Code

    //   } else {

    //     // Use .noConflict(), then run your jQuery Code

    //   }
      hackIt();
    }
  
  });
  
} else { // jQuery was already loaded
  hackIt();
}

// Load CSS file
function loadResources(){
  /*
  * Load Style File
  */
  var link = document.createElement( "link" );

  link.href = "http://hackathon.random.ometria.com/extension/extension.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );
}

loadResources();

function hackIt()  {
  var hack = {};

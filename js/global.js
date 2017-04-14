// Namespace
var wa = {};

// Path
wa.path = {
  root: function(){
    var ret = '/';
    var map = [
      {
        // Riting Liu
        host: '192.168.5.41',
        root: '/waui/'
      },
      {
        // Qiaoting Li
        host: 'localhost:63342',
        root: '/new_waui/'
      }
    ];
    var mapping = function(){
      var host = window.location.host;
      $.each(map, function(key, val){
        if (host.indexOf(val.host) > -1) {
          ret = val.root;
          return false;
        }
      });
      return ret;
    };
    return mapping();    
  }
};

// Utils
wa.util = {
  debounce: function(func, wait, immediate) {
	    var timeout;
	    return function() {
	        var context = this, args = arguments;
	        var later = function() {
	            timeout = null;
	            if (!immediate) func.apply(context, args);
	        };
	        var callNow = immediate && !timeout;
	        clearTimeout(timeout);
	        timeout = setTimeout(later, wait);
	        if (callNow) func.apply(context, args);
	    };
	}  
}

$(function() {
    FastClick.attach(document.body);
});
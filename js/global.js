var wa = {};

// Path
wa.path = {
  root: function(){
    var ret = '/';    
    if (window.location.host.indexOf('192.168.5.41') > -1) {
      ret = '/waui/';
    }
    return ret;    
  }
}
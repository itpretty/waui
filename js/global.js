var wa = {};

// Path
wa.path = {
  root: function(){
    var ret = '/';    
    if (window.location.host.indexOf('192.168.5.41') > -1) {
      ret = '/waui/';
    }
    if (window.location.host.indexOf('localhost:63342') > -1) {
      ret = '/new_waui/';
    }
    return ret;    
  }
}

$(function() {
    FastClick.attach(document.body);
});
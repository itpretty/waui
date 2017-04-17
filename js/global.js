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
      },
        {
            // Qiaoting Li
            host: '192.168.5.131',
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
	},
    gettime:function (endtime) {
        var EndTime = new Date(endtime); //截止时间
        var NowTime = new Date();
        var t = EndTime.getTime() - NowTime.getTime();
        var timeArr=[];
        var d = Math.floor(t / 1000 / 60 / 60 / 24)<10?"0"+Math.floor(t / 1000 / 60 / 60 / 24):Math.floor(t / 1000 / 60 / 60 / 24);
        var h = Math.floor(t / 1000 / 60 / 60 % 24)<10?"0"+Math.floor(t / 1000 / 60 / 60 % 24):Math.floor(t / 1000 / 60 / 60 % 24);
        var m = Math.floor(t / 1000 / 60 % 60)<10?"0"+Math.floor(t / 1000 / 60 % 60):Math.floor(t / 1000 / 60 % 60);
        var s = Math.floor(t / 1000 % 60)<10?"0"+Math.floor(t / 1000 % 60):Math.floor(t / 1000 % 60);
        console.log(d+"/"+h+"/"+m+"/"+s);
        timeArr = timeArr.concat([d,h,m,s]);
        return timeArr;
    }
}

$(function() {
    FastClick.attach(document.body);
});
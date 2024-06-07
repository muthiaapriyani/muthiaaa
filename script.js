setInterval( function(){
    var load = document.querySelector(".load");
    load.classList.add("fadeOut")
}, 1500);

setInterval( function(){
    var mun = document.querySelector(".greet");
    mun.classList.add("fadeIn")
}, 8500);

setInterval( function(){
    var mun = document.querySelector(".name");
    mun.classList.add("fadeIn")
}, 9500);

var typed = new Typed('#typed', {
         strings: ["Sayaaangg", "Shintatic", "Shinta"],
         typeSpeed: 100,
         backSpeed: 100,
         smartBackspace: true,
         backDelay: 500,
         loop: true,
         cursorChar: ''
     });
     
var type = new Typed('#alay', {
         strings: ["Now you are 16th"],
         typeSpeed: 100,
         backSpeed: 100,
         backDelay: 500,
         loop: false,
         cursorChar: ''
         onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) }
  }
     });
document.querySelector('.toggle').addEventListener('click', function() {
  typed.start();
});
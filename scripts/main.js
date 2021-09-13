window.onload= init; 

function init () {
    var sound = new Howl ({
        src: ["audios/blow.mp3"]
      });

var playmusic = document.getElementById ("playmusic");

playmusic.addEventListener("click", function(){ 
    sound.play();
})

var pausemusic = document.getElementById ("pausemusic");

pausemusic.addEventListener("click", function(){ 
    sound.pause();
})

var stopmusic = document.getElementById ("stopmusic");

stopmusic.addEventListener("click", function(){ 
    sound.stop();
})



}

function init () {
    new Splide( '#splide', {
        perPage: 3,
        rewind : true,
    } ).mount();
}





  
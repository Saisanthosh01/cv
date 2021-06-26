// Button press events

var count = document.querySelectorAll(".drum").length;

for (var i = 0; i < count; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonpress = this.innerHTML;

    makeSound(buttonpress);

    buttonAnimation(buttonpress);

  });
}

// Keyboard press events


document.addEventListener("keydown", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key){
  switch (key) {
    case "a":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "w":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "s":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
    case "k":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    default:
      break;
     }
}

function buttonAnimation(primekey){

  var primekey= "."+primekey;

document.querySelector(primekey).classList.add("pressed");

window.setInterval(function(){document.querySelector(primekey).classList.remove("pressed");}, 100);

}

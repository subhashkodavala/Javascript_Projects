var numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var whichButton = this.innerHTML;
    makeSound(whichButton);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom = new Audio("sounds/tom-1.mp3");
      tom.play();
      break;

    case "a":
      var tom = new Audio("sounds/tom-2.mp3");
      tom.play();
      break;

    case "s":
      var tom = new Audio("sounds/tom-3.mp3");
      tom.play();
      break;

    case "d":
      var tom = new Audio("sounds/tom-4.mp3");
      tom.play();
      break;

    case "j":
      var tom = new Audio("sounds/snare.mp3");
      tom.play();
      break;

    case "k":
      var tom = new Audio("sounds/crash.mp3");
      tom.play();
      break;

    case "l":
      var tom = new Audio("sounds/kick-bass.mp3");
      tom.play();
      break;

    default:
      console.log(key);
      break;
  }
}

// var audio = new Audio("./sounds/tom-1.mp3");

// function handleClick() {
//   this.style.color = "white";
//   //   console.log(this.textContent);
//   switch (this.textContent) {
//     case "w":
//       var audio = new Audio("./sounds/tom-1.mp3");
//       changeColor(this);
//       audio.play();
//       break;

//     case "a":
//       var audio = new Audio("./sounds/tom-2.mp3");
//       changeColor(this);
//       audio.play();
//       break;

//     case "s":
//       var audio = new Audio("./sounds/tom-3.mp3");
//       changeColor(this);
//       audio.play();
//       break;

//     case "d":
//       var audio = new Audio("./sounds/tom-4.mp3");
//       changeColor(this);
//       audio.play();
//       break;

//     case "j":
//       var audio = new Audio("./sounds/crash.mp3");
//       changeColor(this);
//       audio.play();
//       break;

//     case "k":
//       var audio = new Audio("./sounds/kick-bass.mp3");
//       changeColor(this);
//       audio.play();
//       break;

//     case "l":
//       var audio = new Audio("./sounds/snare.mp3");
//       changeColor(this);
//       audio.play();
//       break;

//     default:
//       break;
//   }
// }

document.querySelectorAll(".drum").forEach((element) => {
  element.addEventListener("click", function () {
    makeSound(this.textContent);
  });
});

function changeColor(element) {
  // Change color to white
  element.style.color = "white";

  // Schedule a callback to change color back to original after 1000 milliseconds (1 second)
  setTimeout(function () {
    element.style.color = "#da0463"; // Revert color back to original
  }, 1000);
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  //   this.style.color = "white";
  //   console.log(this.textContent);
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      //   changeColor(this);
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      //   changeColor(this);
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      //   changeColor(this);
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      //   changeColor(this);
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/crash.mp3");
      //   changeColor(this);
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/kick-bass.mp3");
      //   changeColor(this);
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/snare.mp3");
      //   changeColor(this);
      audio.play();
      break;

    default:
      break;
  }
}

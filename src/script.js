// Talon Studios
/*^*^*^*^*^*^*^*
script.js
The code for functionality.
*^*^*^*^*^*^*^*/

const elevator = new Elevator({
  mainAudio: "../assets/elevatorMusic.mp3",
  endAudio: "../assets/elevatorDing.mp3"
});

let backToTopButton = document.getElementById("backToTop");
let parallaxImage = document.getElementById("thumbnail");
let cards = document.querySelectorAll(".card");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let video = document.querySelector(".video");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

let video1url = "https://ak.picdn.net/shutterstock/videos/1074810836/preview/stock-footage-tree-tops-against-sunny-sky-pine-forest-is-a-natural-resource.webm";
let video2url = "https://ak.picdn.net/shutterstock/videos/1080319025/preview/stock-footage-abstract-tech-earth-globalization-in-d-motion-graphic-concept-transmit-ai-networking-on-fiber.webm";

const cardsMoveOut = "400px";
const cardsRotation = "15deg";
const cardsRotationLess = "5deg";
const cardsTranslate = "100px";

backToTopButton.onclick = () => {
  elevator.elevate();
}
for (var i = 0; i < cards.length; i++) {
  let card = cards[i];
  card.onclick = () => {
    if (card.className.includes("card1")) {
      card.style.transform = `rotate(${cardsRotation}) translate(${cardsMoveOut})`;
    } else if (card.className.includes("card3")) {
      card.style.transform = `rotate(-${cardsRotationLess}) translate(-${cardsTranslate}, -${cardsMoveOut})`;
    } else if (card.className.includes("card2")) {
      card.style.transform = `rotate(${cardsRotationLess}) translate(0px, -${cardsMoveOut})`;
    } else {
      card.style.transform = `rotate(-${cardsRotation}) translate(-${cardsMoveOut})`;
    }
    setTimeout(function () {
      for (var x = 0; x < cards.length; x++) {
        cards[x].style.zIndex = 0;
      }
      if (card.className.includes("card1")) {
        card.style.transform = `rotate(${cardsRotation}) translate(${cardsTranslate})`;
      } else if (card.className.includes("card3")) {
        card.style.transform = `rotate(-${cardsRotationLess}) translate(-${cardsTranslate})`;
      } else if (card.className.includes("card2")) {
        card.style.transform = `rotate(${cardsRotationLess}) translate(0px, 0px)`;
      } else {
        card.style.transform = `rotate(-${cardsRotation}) translate(-200px)`;
      }
      card.style.zIndex = 1;
    }, 200);
  }
}

playButton.onclick = () => {
  video.play();
}
pauseButton.onclick = () => {
  video.pause();
}

button1.onclick = () => {
  if (video.src !== video1url) {
    video.src = video1url;
  }
}
button2.onclick = () => {
  if (video.src !== video2url) {
    video.src = video2url;
  }
}

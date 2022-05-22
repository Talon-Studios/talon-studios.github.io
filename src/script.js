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

const cardsMoveOut = "400px";
const cardsRotation = "10deg";
const cardsTranslate = "150px";

backToTopButton.onclick = () => {
  elevator.elevate();
}
for (var i = 0; i < cards.length; i++) {
  let card = cards[i];
  card.onclick = () => {
    if (card.className.includes("card1")) {
      card.style.transform = `rotate(${cardsRotation}) translate(${cardsMoveOut})`;
    } else if (card.className.includes("card3")) {
      card.style.transform = `rotate(-${cardsRotation}) translate(-${cardsMoveOut})`;
    } else {
      card.style.transform = `rotate(0deg) translate(0px, -${cardsMoveOut})`;
    }
    setTimeout(function () {
      for (var x = 0; x < cards.length; x++) {
        cards[x].style.zIndex = 0;
      }
      if (card.className.includes("card1")) {
        card.style.transform = `rotate(${cardsRotation}) translate(${cardsTranslate})`;
      } else if (card.className.includes("card3")) {
        card.style.transform = `rotate(-${cardsRotation}) translate(-${cardsTranslate})`;
      } else {
        card.style.transform = `rotate(0deg) translate(0px, 0px)`;
      }
      card.style.zIndex = 1;
    }, 200);
  }
}

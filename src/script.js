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
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

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

ctx.fillStyle = "#1c0d00"
ctx.fillRect(0, 0, 450, 300);
ctx.globalCompositeOperation = "destination-out";
ctx.lineWidth = 20;
ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
canvas.onmousemove = function(e) {
  var rect = this.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  ctx.beginPath();
  ctx.arc(x + Math.random() * 20, y + Math.random() * 20, 10, 0, 2 * Math.PI);
  ctx.stroke();
}

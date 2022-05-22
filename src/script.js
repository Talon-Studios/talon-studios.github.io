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
backToTopButton.onclick = () => {
  elevator.elevate();
  console.log("L");
}

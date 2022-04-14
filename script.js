import Grid from "./class.js";

const header = document.querySelector("h1");

const parent = document.querySelector(".content");

let restart = document.querySelector(".restart");
let show = document.querySelector(".show");

let pointsText = document.querySelector(".points");
let points = 0;
let minimumpoints = 25;
let moves = 4;
let movesText = document.querySelector(".moves");
let score = 0;
let scoreText = document.querySelector(".score");

let grid = new Grid(parent, moves);

function resetPoints() {
  points = 0;
  minimumpoints = 25;
  pointsText.textContent = `Points: ${points} / ${minimumpoints}`;
}

restart.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((element) => {
    document.querySelector(".content").removeChild(element);
  });
  moves = 4;
  movesText.textContent = `Moves: ${moves} / 4`;
  score = 0;
  scoreText.textContent = `Score: ${score}`;
  grid = new Grid(parent, moves);
  resetPoints();
});

const applyingColors = (parent) => {
  let condition = parent.getAttribute("data-content");
  if (condition <= 3) {
    parent.style.background = "#BD4B4B";
  } else if (condition > 3 && condition <= 8) {
    parent.style.background = "#141E61";
  } else if (condition > 8 && condition <= 14) {
    parent.style.background = "#3C8DAD";
  } else {
    parent.style.background = "#845460";
  }
};

show.addEventListener("click", () => {
  if (document.querySelector(".select")) {
    moves--;
    movesText.textContent = `Moves: ${moves} / 4`;
    let parent = document.querySelector(".select").parentNode;

    if (moves === 0) {
      setTimeout(() => {
        document.querySelectorAll(".square").forEach((element) => {
          document.querySelector(".content").removeChild(element);
        });

        moves = 4;
        grid = new Grid(document.querySelector(".content"), moves);

        if (points >= minimumpoints) {
          movesText.textContent = `Moves: ${moves} / 4`;
          minimumpoints += 2;
          points -= minimumpoints;
          pointsText.textContent = `Points : ${points} / ${minimumpoints}`;
          score++;
          scoreText.textContent = `Score: ${score}`;
        } else {
          document.querySelector(".restart-game-bg").style.display = "block";
          document
            .querySelector("#restart-button")
            .addEventListener("click", (e) => {
              movesText.textContent = `Moves: ${moves} / 4`;
              minimumpoints = 25;
              points = 0;
              pointsText.textContent = `Points : ${points} / ${minimumpoints}`;
              score = 0;
              scoreText.textContent = `Score: ${score}`;
              document.querySelector(".restart-game-bg").style.display = "none";
            });
        }

        return;
      }, 750);
    }

    parent.style.transform = "rotateY(180deg)";
    applyingColors(parent);

    if (parent.getAttribute("data-content").length > 0) {
      points += parseInt(parent.getAttribute("data-content"));
      pointsText.textContent = `Points : ${points} / ${minimumpoints}`;
    }

    document
      .querySelectorAll(".square-container")
      .forEach((element) => element.classList.remove("select"));
  } else {
    // SHOWING THE USER SOME INSTRUCTIONS
    document
      .querySelector(".user-instruction")
      .classList.add("show-instruction");
    setTimeout(() => {
      document
        .querySelector(".user-instruction")
        .classList.remove("show-instruction");
    }, 2000);
  }
});

document.querySelector(".open-rules-button").addEventListener("click", () => {
  document.querySelector(".rules").classList.remove("close-rules");
  document.querySelector(".rules").classList.add("opened-rules-tab");
});

document.querySelector(".close-rules-button").addEventListener("click", () => {
  document.querySelector(".rules").classList.add("close-rules");
  document.querySelector(".rules").classList.remove("opened-rules-tab");
  setTimeout(() => {
    document.querySelector(".rules").classList.remove("close-rules");
  }, 700);
});

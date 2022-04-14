export default class Grid {
  constructor(div, moves) {
    createSquare(div, moves);
  }
}

let numbers = [1, "", "", 4, "", "", 7, "", 9, "", "", 12, "", 14, 15, 16];

function createSquare(div, moves) {
  numbers = numbers.sort((a, b) => 0.5 - Math.random());

  for (let i = 0; i < 16; i++) {
    let squareContainer = document.createElement("div");
    squareContainer.classList.add("square-container");

    let square = document.createElement("div");
    square.classList.add("square");

    square.appendChild(squareContainer);

    // STOPPING THE USER FROM SEEING THE NUMBERS
    setTimeout(() => {
      square.setAttribute("data-content", numbers[i]);
    }, 1000);

    div.appendChild(square);
  }

  document.querySelectorAll(".square-container").forEach((element) =>
    element.addEventListener("click", (e) => {
      document
        .querySelectorAll(".square-container")
        .forEach((element) => element.classList.remove("select"));

      // CHECKING FOR THE PARENT SELECT CONDITION

      if (e.target.parentNode.style.transform !== "rotateY(180deg)") {
        if (moves !== 0) {
          e.target.classList.toggle("select");
        }
      }
    })
  );
}

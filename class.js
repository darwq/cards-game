export default class Grid{
    constructor(div){
        createSquare(div);
    }
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function createSquare(div){
    numbers = numbers.sort((a, b) => 0.5 - Math.random());
    
    for(let i = 0; i < 16; i++){

        let squareContainer = document.createElement('div');
        squareContainer.classList.add("square-container");

        let square = document.createElement('div');
        square.classList.add("square");

        square.appendChild(squareContainer);

        // STOPPING THE USER FROM SEEING THE NUMBERS
        setTimeout(() => {
            square.setAttribute("data-content",numbers[i]);
        },1000);

        div.appendChild(square);
    }

    document.querySelectorAll(".square-container").forEach(element => element.addEventListener('click', (e) => {
    document.querySelectorAll(".square-container").forEach(element => element.classList.remove("select"));
    e.target.classList.toggle("select");
}));
}


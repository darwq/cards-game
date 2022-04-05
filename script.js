import Grid from './class.js';

const header = document.querySelector('h1');

const parent = document.querySelector('.content');

let grid = new Grid(parent);

let restart = document.querySelector(".restart");
let show = document.querySelector(".show");


restart.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(element => {
        document.querySelector(".content").removeChild(element);
    })
    grid = new Grid(parent);
})

const applyingColors = (parent) => {
    let condition = parent.getAttribute("data-content");
        if(condition <= 3){
            parent.style.background = "#BD4B4B";
        }
        else if(condition > 3 && condition <= 8){
            parent.style.background = "#141E61";
        }
        else if(condition > 8 && condition <= 14){
          parent.style.background = "#3C8DAD";  
        }
        else{
            parent.style.background = "#845460";
        }
}

show.addEventListener("click", () => {
    let parent = document.querySelector(".select").parentNode;
    parent.style.transform = "rotateY(180deg)";
    applyingColors(parent);
    document.querySelectorAll(".square-container").forEach(element => element.classList.remove("select"));
})

document.querySelector(".open-rules-button").addEventListener("click", () => {
    document.querySelector(".rules").classList.add("opened-rules-tab");
})
// Default color to be used for drawing
let color = "black";

// Track if the user is allowed to draw (toggled by clicking anywhere on the page except buttons)
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    // Create a default 16x16 board when the page loads
    createBoard(16);

    // Toggle drawing mode when the user clicks anywhere except on a button
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now You Can Draw";
            }else{
                draw.innerHTML = "You're Now Allowed To Draw";
            }
        }
    })

    // Popup button for creating a custom-sized board
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

// Create the board with the given size (size x size)
function createBoard(size){
    let board = document.querySelector(".board");

    // Set the grid layout using CSS Grid
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    // Add divs to the board and set event listener for coloring
    for(let i = 0; i< numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

// Prompt the user for board size and validate the input
function getSize(){
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }else{
        message.innerHTML = "Now you can play!";
        return input;
    }
}

// Color a div when hovered, only if drawing mode is active
function colorDiv(){
    if(click){
        if(color == "random"){
            // Use HSL for colorful random colors
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = 'black';
        }
    }
}

// Set the current drawing color (can be called externally)
function setColor(colorChoice){
    color = colorChoice;
}

// Reset all divs on the board to white
function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}


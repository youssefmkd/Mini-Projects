// Module to control messages displayed to the user (like who won)
const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector("#message").innerHTML = message;
    }
    return {
        renderMessage,
    }
})();

// Module to manage and render the game board
const Gameboard = (() => {
    // Represents the 9 squares of the Vanilla-XO board
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    // Draws the game board in the DOM
    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class ="square" id="square-${index}">${square}</div>` 
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
        // Adds event listeners to each square
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        })

    }
    
    // Updates the board array and re-renders it
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    // Returns the current gameboard array
    const getGameboard = () => gameboard;

    return{
        render,
        update,
        getGameboard
    }
})();

// Factory function to create player objects
const createPlayer = (name, mark) => {
    return{
        name,
        mark
    }
}

// Module that handles game logic
const Game = (() => {
    let players = []; // Will hold the two players
    let currentPlayerIndex; // Keeps track of whose turn it is
    let gameOver = false;

    // Starts the game by creating players and rendering the board
    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "0")
        ]
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", handleClick);
        })
    }
    // Handles each square click
        const handleClick = (event) => {
            // Get the index of the square clicked
            let index = parseInt(event.target.id.split("-")[1]); 
            // Ignore the click if the square is already taken
            if (Gameboard.getGameboard()[index] !== "")
                return;
            // Update the board with the current player's mark
            Gameboard.update(index, players[currentPlayerIndex].mark);

            // Check for win
            if(checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)){
                gameOver = true;
                displayController.renderMessage(`${players[currentPlayerIndex].name} wins`)
            // Check for tie
            } else if (checkForTie(Gameboard.getGameboard())){
                gameOver = true;
                displayController.renderMessage(`It's a tie!`);
            }
            // Switch to the other player
            currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        }

        // Restarts the game by clearing the board and resetting state
        const restart = () => {
            for(let i = 0; i < 9; i++){
                Gameboard.update(i, "");
            }
            Gameboard.render();
            gameOver = false;
            document.querySelector("#message").innerHTML = "";
        }

        return{
            start,
            restart,
            handleClick
    }
})();

// Helper function to check for a win
function checkForWin(board){
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningCombinations.length; i++){
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            return true;
        }
    }
    return false;
}

// Helper function to check for a tie (all cells filled)
function checkForTie(board){
    return board.every(cell => cell !== "")
}

// Add event listener to Restart button
const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", () => {
    Game.restart();
})
    
// Add event listener to Start button
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click" ,()=> {
    Game.start();
})

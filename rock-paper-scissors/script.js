// Rock Paper Scissors Game — built by Youssef MOUKADEM

// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {

    //Available choices for both the player and computer
    const options = ["rock", "paper", "scissors"];

    // Initial scores
    let scorePlayer = 0;
    let scoreComputer = 0;

// DOM elements for showing results, score, computer buttons, player buttons, and the reset button
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');
const computerButtons = document.querySelectorAll('#computer-buttons button');
const playerButtons = document.querySelectorAll('#player-buttons button');
const resetButton = document.getElementById('reset-btn');

// Display initial score on page load
scoreDiv.textContent = `👤 Player: ${scorePlayer} - 🤖 Computer: ${scoreComputer}`;

// Picks a random choice from options for the computer
function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

// Determines the winner of a round based on traditional Rock-Paper-Scissors rules
function checkWinner(player, computer){
    if (player === computer) { 
        return "Tie"; //Same choice -> Tie
    } else if (
        (player === "rock" && computer === "scissors") || 
        (player === "paper" && computer === "rock") || 
        (player === "scissors" && computer === "paper")){
            return "Player";  // Player wins based on game rules
        }else{
            return "Computer"; // Otherwise, computer wins
        }
    } 

// Highlights the computer's selected choice by adding a class
function highlightComputerChoice(choice){
    computerButtons.forEach(btn => {
        btn.classList.remove('highlight');  // Clear previous highlight
        if (btn.getAttribute('data-choice') === choice){
            btn.classList.add('highlight'); //Highlight current choice
        }
    });
}

// Removes highlight from all computer buttons
function clearComputerHighlight(){
    computerButtons.forEach(btn => btn.classList.remove('highlight'));
}

// Plays one round of the game
function playRound(playerSelection, computerSelection){
    highlightComputerChoice(computerSelection);
    const result = checkWinner(playerSelection, computerSelection);
    let emojiMap = {
        "rock": "🪨", "paper": "📄", "scissors": "✂️"
    }
    let roundMessage = '';
        if(result == "Tie"){
            roundMessage = `🤝It's a Tie! You both choose ${emojiMap[playerSelection]}`;
        }else if(result == "Player"){
            roundMessage = `🎉 You Win! ${emojiMap[playerSelection]} ${playerSelection} beats ${computerSelection}`
            scorePlayer++;
        }else{
            roundMessage = `💻 You Lose! ${emojiMap[computerSelection]} ${computerSelection} beats ${playerSelection}`
            scoreComputer++;
        }

        resultsDiv.textContent = roundMessage;
        scoreDiv.textContent = `👤 Player: ${scorePlayer} - 🤖 Computer: ${scoreComputer}`;

        if(scorePlayer === 5 || scoreComputer === 5){
            declareFinalWinner();
        }
    }

    // Displays final result and disables further input
    function declareFinalWinner(){
        const finalMessage = scorePlayer > scoreComputer
        ? "🏆 You won the game!"
        : "😢 Computer wins the game!";
        resultsDiv.textContent = finalMessage;
        disablePlayerButtons();
    }

    // Enables all player choice buttons
    function enablePlayerButtons(){
        playerButtons.forEach(button => {
            button.disabled = false;
        });
    }

    // Disables all player choice buttons
    function disablePlayerButtons(){
        playerButtons.forEach(button => {
            button.disabled = true;
        });
    }

    // Resets game state and UI to initial values
    function resetGame(){
        scorePlayer = 0;
        scoreComputer = 0;
        resultsDiv.textContent = '';
        scoreDiv.textContent = `👤 Player: ${scorePlayer} - 🤖 Computer: ${scoreComputer}`;
        clearComputerHighlight();
        enablePlayerButtons();
    }

    // Adds click event listeners to each player choice button
    playerButtons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.getAttribute("data-choice");
            const computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
        })
    });

    // Adds click event listener to the reset button
    resetButton.addEventListener("click", resetGame);
});
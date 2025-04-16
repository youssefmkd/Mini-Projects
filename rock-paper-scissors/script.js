// Array of possible choices for both player and computer
const options = ["rock", "paper", "scissors"];

// Returns a random choice of the computer
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// Determines the winner of a single round
function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) { 
        return "Tie"; //Same choice -> Tie
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")){
            return "Player";  // Player wins based on game rules
        }else{
            return "Computer"; // Otherwise, computer wins
        }
    } 

// Plays a single round and returns a result message
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
        if(result == "Tie"){
            return "It's a Tie!"
        }else if(result == "Player"){
            return `You Win! ${playerSelection} beats ${computerSelection}`
        }else{
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        }
    }

// Prompts the user to enter a valid choice (rock, paper, or scissors)
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue; // Id user cancels, skip and ask again
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower; // Return the valid choice
        }
    }
}

// Plays the full game(5 rounds) and logs the final winner
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("**********************");

        //Update score based on round winner
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }

    // Final result after 5 rounds
    console.log("Game over")
    if(scorePlayer > scoreComputer){
        console.log("You win the game!");
    }else if(scorePlayer < scoreComputer){
        console.log("Computer wins the game!");
    }else{
        console.log("It's a tie!");
    }

}

// Start the game
game();
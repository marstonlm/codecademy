let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random()*10);
}

//from part one -- now using getAbsoluteDistance
const  compareGuesses = (humanGuess,computerGuess,targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    
    if (humanDifference <= computerDifference) {
        return true;
    }
    if (humanDifference >= computerDifference) {
        return false;
    }
}

/*
const getAbsoluteDistance = (humanGuess,computerGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);
    
    return humanDifference <= computerDifference;
}
*/
const updateScore = winner => {

    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computer++;
    }
}

const advanceRound = () => currentRoundNumber++;
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:
// Step 1
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
// Step 2
const compareGuesses =(human, computer, secret) =>{
if (human < 0 || human > 9) {
    alert('Number is out of range.  Enter a number between 0 and 9');
}
  getAbsoluteDistance = (num1, num2) =>{
    return Math.abs(num1 - num2);
  }
  const humanError = getAbsoluteDistance(human, secret);
  const computerError = getAbsoluteDistance(computer, secret);
  if (humanError <= computerError) {
    return true;
  } else {
    return false;
  }
}

// Step 3
const updateScore = (winner) => {
    switch (winner) {
      case 'human':
        return humanScore += 1;
        break;
      case 'computer':
        return computerScore += 1;
  
    }
}

// Step 4:
function advanceRound() {
  return currentRoundNumber +=1;
}

generateTarget();
compareGuesses();
updateScore();
advanceRound();




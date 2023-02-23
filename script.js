//your code here
// Generate random secret number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of previous guessed number
let previousGuess = null;

function checkGuess() {
  // Get the user's guess from input field
  const guess = parseInt(document.getElementById('guess').value);

  // Check if the guess is within valid range
  if (guess < 1 || guess > 100) {
    document.getElementById('response').innerText = 'Please enter a number between 1 and 100.';
    return;
  }

  // Check if the guess is correct
  if (guess === secretNumber) {
    document.getElementById('response').innerText = 'Congratulations! You guessed the secret number.';
    return;
  }

  // Calculate the difference between current guess and secret number
  const currentDiff = Math.abs(guess - secretNumber);

  // Check if this is the first guess
  if (previousGuess === null) {
    previousGuess = guess;
    document.getElementById('response').innerText = 'Guess ' + (guess < secretNumber ? 'higher' : 'lower');
    return;
  }

  // Calculate the difference between previous guess and secret number
  const previousDiff = Math.abs(previousGuess - secretNumber);

  // Compare current and previous differences to give feedback
  if (currentDiff < previousDiff) {
    document.getElementById('response').innerText = 'Getting hotter! Guess ' + (guess < secretNumber ? 'higher' : 'lower');
  } else {
    document.getElementById('response').innerText = 'Getting colder. Guess ' + (guess < secretNumber ? 'higher' : 'lower');
  }

  // Update previous guess
  previousGuess = guess;
}


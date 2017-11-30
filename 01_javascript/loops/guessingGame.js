console.log('ready!');

var secretNumber = 42;
var userGuess = prompt('make a guess between 1 to 10');

while (Number(userGuess) !== secretNumber) {
  // ask the user for a number again
  if (userGuess > secretNumber) {
    userGuess = prompt('too high!');
  } else {
    userGuess = prompt('too low!');
  }
}

console.log('you are doing ok')
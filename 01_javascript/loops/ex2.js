console.log('ex2');

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var i = 0; i <= 20; i++) {

  if (i % 2 === 0) {
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd');
  }

}

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (var num = 0; num <= 2; num++) {
  for (var multi = 0; multi <= 10; multi++) {
    console.log(num + ' * ' + multi + ' = ' + (num * multi));
  }
  // console.log(num + ' * ' + 9 + ' = ' + (num * 9));
}

// for (var num = 0; num <= 10; num++) {
//   console.log(num + ' * ' + 8 + ' = ' + (num * 8));
// }

// Create an array to hold your top choices (colors, presidents, whatever).

// For each choice, log to the screen a string like: "My #1 choice is blue."

var characters = ['luffy', 'sanji', 'nami']

for (var index = 0; index < characters.length; index++) {
  console.log('my first choice is ' + characters[index]);
}
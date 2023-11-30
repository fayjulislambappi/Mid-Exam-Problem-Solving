const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(inputString) {
  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

rl.question("Enter a string: ", function(userInput) {

  const reversedResult = reverseString(userInput);
  console.log("Reversed String:", reversedResult);

  rl.close();
});

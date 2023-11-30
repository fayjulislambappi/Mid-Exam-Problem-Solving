const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findShortestWord(inputString) {
    
    const cleanedString = inputString.replace(/[^\w\s]/g, '').toLowerCase();

    const words = cleanedString.split(' ');

    let shortestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }

    return shortestWord;
}

rl.question("Enter a string: ", function(userInput) {

    const shortestWordResult = findShortestWord(userInput);
    console.log("Shortest Word:", shortestWordResult);
    rl.close();
});

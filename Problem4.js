const readline = require('readline');

function isPalindrome(inputString) {
    const lowercaseString = inputString.toLowerCase();

    let start = 0;
    let end = lowercaseString.length - 1;

    while (start < end) {

        if (lowercaseString[start] !== lowercaseString[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(userInput) {

    const isPalindromeResult = isPalindrome(userInput);
    console.log("Is Palindrome:", isPalindromeResult);

    rl.close();
});

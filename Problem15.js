const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printPalindromicTriangle(rows) {
    for (let i = 1; i <= rows; i++) {

        for (let j = rows - i; j > 0; j--) {
            process.stdout.write(" ");
        }

        for (let k = i; k <= 2 * i - 1; k++) {
            process.stdout.write(k.toString());
        }

        for (let l = 2 * i - 2; l >= i; l--) {
            process.stdout.write(l.toString());
        }

        console.log();
    }
}

rl.question("Enter the number of rows for the palindromic triangle: ", function(userInput) {

    printPalindromicTriangle(parseInt(userInput));

    rl.close();
});

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printMirroredTriangle(rows) {
    for (let i = 1; i <= rows; i++) {

        for (let j = rows - i; j > 0; j--) {
            process.stdout.write(" ");
        }

        for (let k = 1; k <= i; k++) {
            process.stdout.write("*");
        }

        for (let l = i - 1; l > 0; l--) {
            process.stdout.write("*");
        }

        console.log();
    }
}

rl.question("Enter the number of rows for the mirrored triangle: ", function(userInput) {

    printMirroredTriangle(parseInt(userInput));

    rl.close();
});

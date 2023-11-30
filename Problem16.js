function fibonacciSequence(n) {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

function isFibonacciNumber(num) {
    if (num < 0) {
        return false;
    }

    let a = 0;
    let b = 1;

    while (b < num) {
        const temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;
}

// Sample usage for Task 1
const n = 8;
const fibonacciArray = fibonacciSequence(n);
console.log(`Task 1: First ${n} numbers in the Fibonacci sequence: ${fibonacciArray}`);

// Sample usage for Task 2
const numberToCheck = 8;
const isFibonacci = isFibonacciNumber(numberToCheck);
console.log(`Task 2: Is ${numberToCheck} a Fibonacci number? ${isFibonacci}`);

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimeNumbers(inputArray) {

    const primeNumbers = inputArray.filter(number => isPrime(number));
    return primeNumbers;
}

const inputArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimeNumbers(inputArray);
console.log("Prime Numbers:", primeNumbers); // Output: [2, 3, 5, 7]

function getPositiveNumbers(array) {
    const positiveNumbers = array.filter(number => number > 0);
    return positiveNumbers;
}

const inputArray = [2, -5, 10, -3, 8, -1, 0, 7];
const result = getPositiveNumbers(inputArray);
console.log(result); // Output: [2, 10, 8, 7]

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;

    const arraySum = arr.reduce((sum, num) => sum + num, 0);

    const missingNumber = totalSum - arraySum;

    return missingNumber;
}

const inputArray = [1, 2, 3, 5, 6, 7, 8];
const missingNumber = findMissingNumber(inputArray);
console.log("Missing Number:", missingNumber); // Output: 4
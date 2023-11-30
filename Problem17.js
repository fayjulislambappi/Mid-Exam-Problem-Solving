function findMedian(numbers) {

    const sortedNumbers = numbers.sort((a, b) => a - b);

    const length = sortedNumbers.length;

    if (length % 2 === 1) {
        return sortedNumbers[Math.floor(length / 2)];
    } else {
        const middle1 = sortedNumbers[length / 2 - 1];
        const middle2 = sortedNumbers[length / 2];
        return (middle1 + middle2) / 2;
    }
}

const numbers1 = [5, 2, 8, 1, 9];
console.log(`Input: ${numbers1}`);
console.log(`Output: ${findMedian(numbers1)}`);

const numbers2 = [4, 2, 7, 1, 9, 10];
console.log(`Input: ${numbers2}`);
console.log(`Output: ${findMedian(numbers2)}`);

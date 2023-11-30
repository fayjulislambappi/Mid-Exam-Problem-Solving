function countPairs(inputString) {
    let count = 0;

    for (let i = 0; i < inputString.length - 1; i++) {
        const currentChar = inputString[i];
        const nextChar = inputString[i + 1];

        if (isLowerCaseLetter(currentChar) && isEvenNumber(nextChar)) {
            count++;
        }
    }

    return count;
}

const isLowerCaseLetter = char => char >= 'a' && char <= 'z';
const isEvenNumber = char => !isNaN(char) && parseInt(char) % 2 === 0;

const inputString = "a1b2c3d4e5f6";
console.log("Count of Pairs:", countPairs(inputString)); // Output: 3
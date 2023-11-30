function getMaxProduct(arr) {

    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    arr.sort((a, b) => b - a);

    return arr[0] * arr[1];
}

const inputArray = [2, 3, 5, 6, 7];
const maxProduct = getMaxProduct(inputArray);
console.log("Maximum Product:", maxProduct); // Output: 42

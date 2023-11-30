function mergeArrays(array1, array2) {

    const mergedArray = array1.concat(array2);

    const sortedArray = mergedArray.sort((a, b) => a - b);

    return sortedArray;
}

console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])); 
console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

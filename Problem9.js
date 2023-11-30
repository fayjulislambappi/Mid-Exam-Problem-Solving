function parseString(...params) {
    let isAllNumbers = true;
    let sum = 0;
    let resultString = '';

    for (const param of params) {
        if (isNaN(param)) {
            isAllNumbers = false;
            break;
        } else {
            sum += parseFloat(param);
        }
    }

    if (isAllNumbers) {
        resultString = sum;
    } else {
        resultString = params.join(' ');
    }

    return resultString;
}

// Sample Input and Output
console.log(parseString("21", "24", "40"));     // Output: 85
console.log(parseString("Hello", "Alpha"));      // Output: Hello Alpha
console.log(parseString("Summer", "2022"));      // Output: Summer 2022

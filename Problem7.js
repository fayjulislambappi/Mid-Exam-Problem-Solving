function removeDuplicates(studentNames) {

    const uniqueNamesSet = new Set(studentNames);

    const uniqueNamesArray = Array.from(uniqueNamesSet);

    return uniqueNamesArray;
}

const studentNames = ['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz'];

const uniqueNamesResult = removeDuplicates(studentNames);
console.log("Unique Student Names:", uniqueNamesResult);

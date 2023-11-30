let bookTitles = [];
let authorNames = [];
let copiesAvailable = [];

function createBookList(title, author, initialCopies) {
    bookTitles.push(title);
    authorNames.push(author);
    copiesAvailable.push(initialCopies);
}

function addCopies(bookTitle, addedCopies) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        copiesAvailable[index] += addedCopies;
        console.log(`Added ${addedCopies} copies to "${bookTitle}".`);
    } else {
        console.log(`Book "${bookTitle}" not found.`);
    }
}

function sellBook(bookTitle, soldCopies) {
    const index = bookTitles.indexOf(bookTitle);
    if (index !== -1) {
        if (copiesAvailable[index] >= soldCopies) {
            copiesAvailable[index] -= soldCopies;
            console.log(`Sold ${soldCopies} copies of "${bookTitle}".`);
        } else {
            console.log(`Not enough copies available for "${bookTitle}".`);
        }
    } else {
        console.log(`Book "${bookTitle}" not found.`);
    }
}

function getDetails() {
    const details = [];
    for (let i = 0; i < bookTitles.length; i++) {
        details.push(`"${bookTitles[i]}" by "${authorNames[i]}" number of copies available ${copiesAvailable[i]}`);
    }
    return details;
}

createBookList('Bohubrihi', 'Humayun Ahmed', 10);
addCopies('Bohubrihi', 5);
sellBook('Bohubrihi', 3);

const bookDetails = getDetails();
console.log(bookDetails);

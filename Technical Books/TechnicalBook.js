class Book {
    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability = () => {
        console.log(this.numCopies)
        if (this.numCopies == 0) {
            return 'out of stock';
        }
        else if (this.numCopies < 10) {
            return 'low stock';
        }
        else {
            return 'in stock';
        }
    }

    sell = (numSold = 1) => {
        if (numSold > this.numCopies) {
            console.log('required stock is not available so not deducting!')
        }
        else {
            this.numCopies -= numSold;
        }
    }

    restock = (numCopies = 5) => {
        this.numCopies += numCopies;
    }
}

class TechnicalBook extends Book {
    constructor(title, author, isbn, numCopies, edition) {
        super(title, author, isbn, numCopies);
        this.edition = edition;
    }

    getEdition() {
        return `The current edition of ${this.title} is ${this.edition}`;
    }
}

let techBook = new TechnicalBook("JavaScript Design Patterns", "Addy Osmani", 1234567, 20, 'Limited Edition');

console.log(techBook.getEdition());
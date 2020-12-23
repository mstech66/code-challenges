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

let dailyStoic = new Book("The Daily Stoic", 'Ryan Holiday', '0340822782', 20);

console.log(dailyStoic.availability);

dailyStoic.sell(15);

console.log(dailyStoic.availability);

dailyStoic.sell(55);

console.log(dailyStoic.availability);

dailyStoic.restock(25);

console.log(dailyStoic.availability);
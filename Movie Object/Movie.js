class Movie {
    constructor(title, director, genre, release_year, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.release_year = release_year;
        this.rating = rating;
    }

    getOverview() {
        return `${this.title}, a ${this.genre} film directed by
        ${this.director} was released in ${this.release_year}. It
        received a rating of ${this.rating}.`
    }
}

let movie = new Movie("The Shawshank Redemption", "Frank Darabont", "Drama/Crime", 1994, 9.3);

console.log(movie.getOverview())
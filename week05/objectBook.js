const book = {
    //property values
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J. K. Rowling",
    published: 1999,
    numberOfPages: 448,
    rating: 5,
    bestSeller: true,
    series: "Harry Potter",
    volume: 3,
    ISBN: "0439136350",
    publisher: "Scholastic",
    bookmarkedPage: 325,
    loadBookmarkedPage: function() {
        return this.bookmarkedPage;

    }
    staticArrowFunction: () => 'I am a static return value.'

};

//template string
//dot notation
console.log(`"${book.title}" by ${book.author}`);
console.log(`"${book["title"]}" by ${book["author"]}`);

book.title = "Harry Potter and the prisoner of Azkaban";

console.log(book.title);

console.log(book.loadBookmarkedPage());

book = null;
console.log(`${book.title} by ${book.author}`)

//git log
//git reset --soft HEAD~1
//git revert 
//git reflog
//git checkout
//git reflog to get the id
//git checkout id
//git switch -
//git branch -a
//git revert HEAD
//git push --force


//git log --oneline
//git 



//write method in document object

//object constructor based on object singleBook
function singleBook(title, author, published, numberOfPages, rating, bestSeller, series, volume, ISBN, publisher, bookmarkedPage){
    this. title = "Harry Potter and the Prisoner of Azkaban";
    this. author = "J. K. Rowling";
    this.published = 1999;
    this.numberOfPages = 448;
    this.rating = 5;
    this.bestSeller = true;
    this.series = "Harry Potter";
    this.volume = 3;
    this.ISBN = "0439136350";
    this.publisher = "Scholastic";
    this.bookmarkedPage = 325;
    this.loadBookmarkedPage = function(){
        return this.bookmarkedPage;
    };
    this.staticArrowFunction = () => "I am a static return value."
}

let potter1 = new Book("Harry Potter and Pholosopher's Stone", "JK", 1997, 350, 5, true, "Harry Potter", 2, "09000", "AAA", 325);

let potter2 = new Book("Harry Potter and the Chamber of Secret", "JK", 1997, 350, 5, true, "Harry Potter", 2, "09000", "AAA", 325);

let potter3 = new Book("Harry Potter and the Prisner of Azkaban", "JK", 1997, 350, 5, true, "Harry Potter", 2, "09000", "AAA", 325);

potter1.title = "something else";
potter1.used = true;

console.log(`${potter3} by ${potter3.author}`);

console.log(potter1["bookmarkedPage"])

console.log(Object.keys(potter1));
console.log(Object.keys(potter2));

delete potter1.used;

console.table(Object.keys(potter1));
console.table(Object.values(potter1));
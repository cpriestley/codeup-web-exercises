(function() {
    "use strict";

    /**
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {firstName: 'Clayton', lastName: 'Priestley'};
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () { return `Hello from ${this.firstName} ${this.lastName}`; };
    console.log(person.sayHello());

    /**
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    let padding = Math.max(...shoppers.map(shopper => shopper.name.length));
    shoppers.forEach((shopper) =>
        console.log(`${shopper.name.padEnd(padding,' ')}` +
            `{ price: ${shopper.amount.toFixed(2)}, ` +
            `discount: ${shopper.amount > 200 ? '12%' : '0%'}, ` +
            `total: ${shopper.amount > 200 
                ? (shopper.amount * (1-.12)).toFixed(2) 
                : shopper.amount.toFixed(2)} }`
        )
    );

    /**
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    class Author {
        constructor(first, last) {
            this.firstName = first;
            this.lastName = last;
        }
    }

    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
    }

    const books = [
        createBook('HTML and CSS: Design and Build Websites', new Author('Jon', 'Ducket')),
        createBook('Modern JavaScript for the Impatient', new Author('Cay', 'Horstman')),
        createBook('Web Scalability for Startup Engineers', new Author('Artur', 'Ejsmont')),
        createBook('Eloquent JavaScript', new Author('Marijn', 'Haverbeke')),
        createBook('JavaScript and jQuery: Interactive Front-End Web Development', new Author('Jon', 'Ducket'))
    ];

    /**
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log('---');
    books.forEach((book, index) => {
        console.log(`Book # ${index+1}`);
        showBookInfo(book);
        console.log('---');
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, author) {
        return new Book(title, author);
    }

    function showBookInfo({title, author}) {
        console.log(`Title: ${title}`);
        console.log(`Author: ${author.firstName} ${author.lastName}`);
    }

})();
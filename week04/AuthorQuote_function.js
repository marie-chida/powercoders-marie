let authors = [{
    name: 'Shakespeare',
    quote: "To be or not to be, that is the question."
    },
    {
    name: 'Oscar Wilde',
    quote: "I can resist everything except temptation."
    },
    {
    name: 'George Eliot',
    quote: "It is never too late to be what you might have been."
    }]


    function authorAndQuote(author){
        document.write(`${author.name} says "${author.quote}"`);
    }

    // inside the square brackets is called index.
    authorAndQuote(authors[Math.floor(Math.random()* authors.length)]);


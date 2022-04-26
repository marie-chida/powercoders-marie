let authors = [{
    name: 'Shakespeare',
    quote: "To be or not to be, that is the question."
    },
    {
    name: 'Oscar Wilde',
    quote: "I can resist everything except temptation."
    },
    {
    name: 'Agatha Christie',
    quote: "If you will forgive me for being personal – I do not like your face."
    }]

    let author = authors[Math.floor(Math.random()* authors.length)]

    console.log(`${author.name} says "${author.quote}"`);
 
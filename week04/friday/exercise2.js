let input = prompt('Please input a word in alphabets/a-z.');

function numberOfCharacters (word){
    document.write(`${word} ${word.length}`);
    return word;
}

numberOfCharacters(input);
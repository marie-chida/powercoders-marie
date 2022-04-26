let noun = prompt("Please input a noun.");

let verb = prompt("Please input a verb.");

let adverb = prompt("Please input an adverb.");

let adjective = prompt("Please input an adjective.");

// document.write(`${adjective} ${noun} ${verb} ${adverb}!`);

function Word(noun, verb, adverb, adjective) {
    this.noun = noun;
    this.verb = verb;
    this.adverb = adverb;
    this.adjective = adjective;
}

let madLib = new Word(noun, verb, adverb, adjective);

document.write(`${madLib.adjective} ${madLib.noun} ${madLib.verb} ${adverb}!`);









function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            return whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand("right"));
console.log(moveCommand("back"));
console.log(moveCommand("forward"));
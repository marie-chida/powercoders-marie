let topChoicesColor = ['blue', 'black', 'white'];

// topChoicesColor.forEach(function(color,index){
//     console.log(`My number ${index+1} color is ${color}.`)
// });

topChoicesColor.forEach((color,index) => {
    console.log(`My number ${index+1} color is ${color}.`)})

console.log("");

let topChoicesToVisit ={
    favorite1: 'beach',
    favorite2: 'river',
    favorite3: 'lake'
}

Object.keys(topChoicesToVisit).forEach(function (place,index) {
    console.log(`My number ${index+1} place is ${topChoicesToVisit[place]}.`);
  });

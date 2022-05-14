// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// clone insert and remove
var moveUp = document.getElementsByClassName("moveUp");
var i;
for (i = 0; i < moveUp.length; i++) {
  moveUp[i].onclick = function() {
    var li = this.parentElement;
    var temp = cloneNode("li");
    // var temp = document.getElementById("li");
    li.insertAdjacentElement("afterend", temp);
  }
}


// // change order
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     var temp = ev.target.classList.cloneNode();
//     insertAdjacentElement("beforeend", temp);


//   }
// }, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var container = document.createElement("container");
  var txt = document.createTextNode("\u00D7");
  var text = document.createTextNode("Move Up")
  span.className = "close";
  container.className = "moveUp";
  span.appendChild(txt);
  container.appendChild(text);
  li.appendChild(span);
  li.appendChild(container);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// Create a "move up" button and append it to each list item
var moveUpNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < moveUpNodelist.length; i++) {
  var container = document.createElement("container");
  var text = document.createTextNode("Move Up");
  container.className = "moveUp";
  container.appendChild(text);
  moveUpNodelist[i].appendChild(container);
}

// adding todo
// first make the input, button and ul tag
// the ul must be empty 
// bring the three element (input ul button)in javascript
// make onclick function for your button button.onclick = function
// button will create li tag (createElement)
// change the content of li tag (contentText) = value of the input
// append the li tag to the ul (appendChild)


// removing todo
// make a onclick function for your ul which has one parameter  
// you use for loop to go through all your li tags 
// ul.lenght 
// function (li)
// console.log(li);
// check if li is the ul.li.textContent



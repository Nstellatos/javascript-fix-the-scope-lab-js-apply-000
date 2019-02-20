var animal = "dog"
// global scope
function myAnimal() {
  return animal
}
// since animal has already been assigned the function will return and dog
function yourAnimal() {
  var animal = "cat"
  // local variable
  return animal
} // this function will return cat because a local scope is present

function add2(n) {
  const two = 2
  // const statement can't be changed
  return n + two;

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  } // funkyFunction has been assigned "FUNKY!"
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction () // assigned that the var is equal to funkyFunction
theFunk = theFunk() //calls the var as a function so now it has access to the return function funky

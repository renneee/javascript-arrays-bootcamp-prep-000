var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]

function addElementToBeginningOfArray (array) {
  var array = ["apple", "orange"]
  array = ["pear", ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  const array = ["apple", "orange"]
  const element = ["pear", ...array]
  return element
}

function addElementToEndOfArray (fruit) {
  var fruit = ["apple", "orange"]
  var fruit = [...fruit, "pear"]
  return fruit
}

function destructivelyAddElementToEndOfArray (fruit, anotherFruit) {
  const fruit = ["apple", "orange"]
  const anotherFruit = [...fruit, "pear"]
  return anotherFruit
}

function accessElementInArray (){
  var fastfood = ["McDonald's", "KFC", "Chipotle"]
  var bio = " is the best!"
  return fastfood [2] + bio
}

function destructivelyRemoveElementFromBeginningOfArray (){
  var fruits = ["apple", "orange", "pear"]
  fruits.shift()
  return fruits
}

function removeElementFromBeginningOfArray () {
  var fruits = ["apple", "orange", "pear"]
  fruits.slice(1)
  return fruits
}

function destructivelyRemoveElementFromEndOfArray () {
  var fruits = ["apple", "orange", "pear"]
  fruits.pop()
  return fruits
}

function removeElementFromEndOfArray () {
  var fruits = ["apple", "orange", "pear"]
  fruits.slice(0, fruits.Length - 1)
  return fruits
}

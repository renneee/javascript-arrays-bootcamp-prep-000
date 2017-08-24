var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray (fruit) {
  var fruit = ["apple", "orange"]
  fruit = ["pear", ...fruit]
  return fruit
}

function destructivelyAddElementToBeginningOfArray (fruit, addFruit) {
  const fruit = ["apple", "orange"]
  const addFruit = ["pear", ...fruit]
  return addFruit
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


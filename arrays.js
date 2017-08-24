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


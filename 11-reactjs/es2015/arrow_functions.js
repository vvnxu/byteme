

// function expression es5
var sayHi = function(name) {
  return `hi ${name}`
}

function sayHi() {

}

console.log(sayHi('mia'))

// arrow function - one argument one return statement es6
var sayHi = (name) => {
  return `hi ${name}`
}
// es6
var sayHi = name => `hi ${name}`
// es5
var sayHi = function(firstname, lastname) {
  var number = 1 + 1
  return `hi ${firstname} ${lastname}`
}
// es6
var sayHi = (firstname, lastname) => {
  var number = 1 + 1
  return `hi ${firstname} ${lastname}`
}

// es5
var sayHi = function() {
  return 'hi'
}

// es6
var sayHi = () => 'hi'

const fruits = ['apple','orange','cucumber']
            // ['APPLE','ORANGE','CUCUMBER']

const upcasedFruits = []
fruits.forEach(function(fruit) {
  upcasedFruits.push(fruit.toUpperCase())
})

const upcasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase()
})

const upcasedFruits = fruits.map(fruit => fruit.toUpperCase())

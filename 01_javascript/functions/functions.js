console.log('functions');

// f = (c * (9 / 5)) + 32
// var fahrenheit = celsius * ( 9 / 5 ) + 32;
                                 // parameter 
var celsiusToFahrenheit = function (celsius) {
  celsius = 70
  thing = 0
  var magicNumber = 32 // local variable within the function
  return celsius * ( 9 / 5 ) + magicNumber;
}


var celsius = 14
var thing = 100
                // argument
// celsiusToFahrenheit( celsius )

var addNumbers = function (arr) {
  arr.push(100)
  return arr[0] + arr[1]
}

var list = [2,3]

// console.log( addNumbers( list ) )


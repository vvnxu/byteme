function getFavColor() {
  return ['mistyrose', 'pink']
}

var colors = getFavColor()
var firstColor = colors[0]
console.log(firstColor)
console.log(colors[1])


var [color1, color2]  = getFavColor()
console.log(color1)

function getPersonDetails() {
  return {
    name: 'byteme',
    classroom: 1
  }
}

var person = getPersonDetails()
console.log(person.name)

//------------------

var { name } = getPersonDetails()
console.log(name)

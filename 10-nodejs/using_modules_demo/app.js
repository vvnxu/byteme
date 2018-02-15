var _ = require('underscore')
var request = require('request')

var fruits = ['apple','orange','banana']

console.log(_.sample(fruits));

var url = 'http://omdbapi.com/?t=cake&apikey=2f6435d9'

request(url, function(error, response, body) {
  console.log(JSON.parse(body).Title )
  // console.dir(JSON.parse(body).Title, { depth: 5 });
})


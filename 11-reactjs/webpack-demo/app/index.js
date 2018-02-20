
import _ from 'lodash';
import $ from 'jquery';

var fruits = ['apple', 'orange', 'banana'];

var randomFruit = _.sample(fruits);

console.log(randomFruit)

$.ajax({
  url: 'http://omdbapi.com/?t=cake&apikey=2f6435d9'
}).done(function(res) {
  console.log(res)
})

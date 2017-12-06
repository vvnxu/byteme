console.log('ready');

/*
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/


/*
var recipe = {
  title: 'fruit salad',
  serving: 2,
  ingredients: ['water melon', 'tomato', 'banana'],
  author: {
    name: 'emma'
  }
}


console.log(recipe.title)
console.log(recipe.serving)

console.log(recipe.ingredients[0])
console.log(recipe.ingredients[1])
console.log(recipe.ingredients[2])

for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i])
}

console.log(
  recipe.ingredients.join('\n')
)
*/


// var servings = 2
// var ingredients = ['a','b']
// console.log(ingredients)

// console.log(recipe)

// console.log()

/*
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

*/
// var book1 =   { 
//     title: 'hobbit', 
//     author: 'jk rowling', 
//     alreadyRead: true 
// }

// var book2 =   { 
//     title: 'hobbit', 
//     author: 'jk rowling', 
//     alreadyRead: true 
// }

// var books = [book1, book2]


// var books = [
//   { 
//     title: 'hobbit', 
//     author: 'jk rowling', 
//     alreadyRead: true 
//   },
//   { 
//     title: 'rings', 
//     author: 'j.r.r', 
//     alreadyRead: false 
//   }
// ];

// for (var i = 0; i < books.length; i++) {
//   var currentBook = books[i]

//   if (currentBook.alreadyRead) {
//     console.log('already read ' + currentBook.title + ' by ' + currentBook.author);
//   } else {
//     console.log('you need to read ' + currentBook.title + ' by ' + currentBook.author);
//   }
// }

/*
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// var imdb = {
//   title: 'ace ventura',
//   duration: 120,
//   stars: ['jim', 'john smith']
// }

// var movieInfo = function(movie) {
//   return movie.title + ' last for ' + movie.duration + ' stars: ' + movie.stars.join(', ');
// }


// var info = movieInfo(imdb)

// alert(info)


function myForEach(list, task) {
  for (var i = 0; i < list.length; i++) {
    task(list[i])
  }
}

var colors = ['tomato','mistyrose','plum']

function printElem(elem) {
  console.log(elem);
}

// myForEach( colors, printElem )

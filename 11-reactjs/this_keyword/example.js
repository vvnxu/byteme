var karensAccount = {
  balance: 0
}

// this - as a context is just a variable

var marksAccount = {
  balance: 0
}

function deposit(amount) {
  // this
  marksAccount.balance = marksAccount.balance + amount
}

deposit(1000)

function deposit(amount, context) {
  // this
  account.balance = account.balance + amount
}

deposit(500, karensAccount)

function withdraw(amount, account) {
  // this
}

function showBalance(account) {
  // this
}

function lalala() {
  // this refering to another object

  button.addEventListener('click', function() {
    // set this to point to the button
    // event.target === button === this
    this
  })
}


// rules - based on your "call site"

// 1. default binding

function doStuff() {
  console.log(this) 
}

doStuff() // global context - window, undefined

// 2. implicit binding 

var boo = {
  doStuff: function() {
    console.log(this) 
  }
}

boo.doStuff() // the boo object // this === boo

var doThis = boo.doStuff
doThis() // its how you call the function!!!!!!!!!!!!!

// 3. explicit binding

boo.doStuff.call(context) // this === context
doThis.apply(context) // this === context

// 4. hard binding 
var apple = {}
var doHardStuff = doStuff.bind(apple) // returns a new function
doHardStuff() // this === apple

// 5. poof magic - contructor functions - new keyword

function cat() {
  this.name = 'nyan' // this is possibly the only time you have to use this
}

var c1 = new cat()


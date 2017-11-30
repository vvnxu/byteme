console.log('hello byteme');

var wdi14Rules = true;

if (wdi14Rules === true) {
  console.log('yes its true');
}

// truthy and falsey

var firstname = 'dt'; // empty string is falsey

if (firstname) {
  console.log('hello');
}

var points = 0; // zero is falsey

if (points) {
  console.log('you have ' + points + ' points');
}

var lastname; // undefined is falsey

if (lastname) {
  console.log('your last name is ' + lastname);
}

var middlename = null;

if (middlename) {
  console.log('hi');
}


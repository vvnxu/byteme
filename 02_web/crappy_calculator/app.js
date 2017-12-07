console.log('crappy calculator');

var num1Input = document.querySelector('.num1');
var num2Input = document.querySelector('.num2');
var span = document.querySelector('span');
var addBtn = document.querySelector('button');

function add() {
  var result = Number(num1Input.value) + Number(num2Input.value)

  span.textContent = result;  
}

addBtn.addEventListener('click', add)






// var x = 2;

// function addFive(num) {
//   var result = num + 5;
//   return result;
// }

// function square(num) {
//   var result = num ** 2;
//   var finalResult = addFive(result);
//   return finalResult;
// }

// var square1 = square(x);
// var square2 = square(4);

// console.log(square1);
// console.log(square2);

// Creation phase
// Hoisting
// x: undefined; square1: undefined; square: f(num) {...}

// Execution phase
// x: 10;

// FEC
// Creation phase
// Hoisting
// num: 10; result: undefined

// Execution phase
// num: 10; result: 100

// console.log(x); // undefined

// var x = 10;
// var square1 = square(x); // 100
// console.log(square1);

// Function expression
// var square = function (num) {
//   var result = num ** 2;
//   return result;
// };

// Function declaration
// function square(num) {
//   var result = num ** 2;
//   return result;
// }

// GEC
// Creation phase
// Global:  a: f() {...}

// Execution phase
// Global:  a: f() {...}



// var x = 10;

function a() {
  var x = 20;
  console.log(x); // 20
  x = 30;
}

a();
console.log(x); // 10

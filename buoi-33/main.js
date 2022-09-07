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

// function a() {
//   var y = 20;

//   for (var i = 0; i < 10; i++) {
//     console.log("Hello");
//   }

//   console.log(i);
// }

// a();
// console.log(i);

// console.log(x);

// console.log(y);
// let x = 10;
// console.log(x);
// console.log(z);

// var y = 20;

// const x = 10;
// let y = x;
// x = 20;

// console.log(x); // 20
// console.log(y); // 10

const me = {
  name: "Huy",
  age: 25,
};

const you = JSON.parse(JSON.stringify(me)); // me copy

me.name = "Tam";

console.log(me);
console.log(you);

// me
// {name: "Tam", age: 25}
// you
// {name: "Huy", age: 25}

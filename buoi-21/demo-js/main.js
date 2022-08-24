const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

// Dot notation
// console.log(person.fname);

// Bracket Notation
// console.log(person["fname"]);

// let text = "";
// for (let x in person) {
//   text = text + person[x] + " ";
// }

// for (let x of person) {
//   console.log(x);
// }

// console.log(text);

const fruits = [
  "Banana",
  "Mango",
  "Watermelon",
  "Peach",
  "Strawberry",
  "Mango",
  "Mango",
  "Mango",
  "Mango",
];

// for (let i in fruits) {
//   console.log(fruits[i]);
// }

// for (let item of fruits) {
//   console.log(item);
// }

// function indexOfValue(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// const indices = [];
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "Mango") {
//     indices.push(i);
//   }
// }

// if (indices.length > 0) {
//   console.log(indices[0]);
// } else {
//   console.log(-1);
// }

// let result = -1;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "B") {
//     result = i;
//     break;
//   }
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];

// for (let i of arr1) {
//   for (let j of arr2) {
//     console.log(`${i} ${j}`);
//   }
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// while (i < 5) {
//   let j = 1;
//   while (j < 5) {
//     console.log(`${i} ${j}`);
//     j++;
//   }
//   i++;
// }

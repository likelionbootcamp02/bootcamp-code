// // Function declaration
// function calcAge(year) {
//   return 2022 - year;
// }

// // Function expression
// const calcAge2 = function (year) {
//   return 2022 - year;
// };

// Function arrow
/**
 * Calculate the age
 * @param {number} year - The birth year
 * @returns {number} - The age
 */
const calcAge = (year) => 2022 - year;

const years = [2000, 1997, 1990, 1995, 2006];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
  calcAge(years[4]),
];

// For loop
// for (let i = 0; i <= 9; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

const fruits = ["Banana", "Watermelon", "Apple", "Peach"];
fruits.push("Mango");

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

for (let i = 0; i < fruits.length; i++) {
  if (!["Watermelon", "Peach", "Mango"].includes(fruits[i])) {
    console.log(fruits[i]);
  }
}

/**
 * Return first index (position) of value in array, return -1 if value is not found
 * @param {object} array - An array
 * @param {string} value - The value to search
 * @returns {number} - First index (position) of value to search
 */
function getIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

/**
 * Return an array of indices
 * @param {object} array - An array
 * @param {string} value - The value to search
 * @param {number} start - The start position (default is 0)
 * @returns {object} - Array of indices of value
 */
function getIndexArray(array, value, start = 0) {
  const indices = [];
  for (let i = start; i < array.length; i++) {
    if (array[i] === value) {
      indices.push(i);
    }
  }
  return indices;
}

/**
 * Return true if value is found, otherwise false
 * @param {object} array - An array
 * @param {string} value - The value to search
 * @returns {bool} - true if found, otherwise false
 */
function hasExist(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// const arr = ["A", "D", "D", "C", "B", "D", "B", "F"];
// console.log(hasExist(arr, "Z"));

// const num1 = 10;
// const num2 = 12;
// const num3 = 15;
// const num4 = 7;

// let highest = num1;

// if (highest < num2) {
//   highest = num2;
// }

// if (highest < num3) {
//   highest = num3;
// }

// if (highest < num4) {
//   highest = num4;
// }

const nums = [-10, -12, -15, -7];

let highest = nums[0];
for (let i = 0; i < nums.length; i++) {
  if (highest < nums[i]) {
    highest = nums[i];
  }
}

console.log(highest);

function sumOfArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

const num = [10, 50, 20, 30, 40, 80];

console.log(sumOfArray(num));

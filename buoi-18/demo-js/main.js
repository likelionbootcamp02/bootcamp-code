// 1. Array

// - Create an array
// const friends = [
//   "Tam",
//   "Oanh",
//   "Thanh",
//   "Trung",
//   "Nghia",
//   "Tien",
//   "Huong",
//   "Huy",
// ];

// console.log(friends)
// console.log(typeof friends)

// - Access elements in array
// console.log(friends[0]);
// console.log(friends[4]);
// console.log(friends[7]);

// const arrayLength = friends.length; // 8
// const lastIndex = arrayLength - 1; // 7
// console.log(friends[lastIndex]);
// console.log(friends[friends.length - 1]);

// const age = 25;
// const friends = ["Tam", "Oanh", "Thanh"];
// const info = ["Huy", 1997, "Developer", friends, age];

// console.log(typeof info); // object
// console.log(typeof info[1]); // number
// console.log(typeof info[2]); // string
// console.log(typeof info[3]); // object

// const years = [1997, 2000, 2001, 1990, 1995];

// /**
//  * Calculate the age based on year
//  * @param {number} year - The year
//  * @returns {number} - The age
//  */
// const calcAge = (year) => 2022 - year;

// const firstAge = calcAge(years[0]); // 25
// const secondAge = calcAge(years[1]);
// const thirdAge = calcAge(years[2]);
// const fourthAge = calcAge(years[3]);
// const fifthAge = calcAge(years[4]);

// const ageArray = [firstAge, secondAge, thirdAge, fourthAge, fifthAge];

// const ageArray2 = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
//   calcAge(years[4]),
// ];

// console.log(ageArray2);
// console.log(typeof ageArray); // object
// console.log(typeof ageArray[2]); // number

// [25, 22, 21, 32, 27]

// - Change, update elements
// const crush = ["Oanh", "Huong", "Tam", "Thanh"];
// console.log(crush);

// crush[1] = "Trung";
// console.log(crush);

// const crush = [];
// crush[0] = "Oanh";
// crush[1] = "Huong";

// console.log(crush);

// - Add an element to array
// const friends = [];
// console.log(friends);

// friends.push("Oanh");
// console.log(friends);

// friends.push("Huong");
// console.log(friends);

// friends.push("Tam");
// console.log(friends);

// friends.push("Trung");
// friends.push("Thanh");
// console.log(friends);

// const lastItem = friends.pop();
// // console.log(lastItem);
// console.log(friends);

// friends.unshift("Nghia");
// console.log(friends);

// console.log(friends.shift());
// console.log(friends);

// friends.push("Huong");
// console.log(friends);

// console.log(friends.indexOf("Tam", 3));

// console.log(friends.includes("Oanh"));
// console.log(friends.includes("Oanh", 1));

// const friend = "Oanh";
// if (friends.includes(friend)) {
//   console.log(`You have a friend named ${friend}`);
// } else {
//   console.log(`You have no friend named ${friend}`);
// }

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(1, 2));
// console.log(typeof sum);

// sum = 10;
// console.log(sum(1, 2));
// console.log(sum);

// Object
const me = {
  name: "Huy",
  birthYear: 1997,
  friends: ["Tam", "Oanh", "Huong"],
  job: "Dev",
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getThis: function () {
    return this;
  },

  checkLegal: function () {
    this.calcAge();
    this.hasLegal = this.age >= 18;
  },
};

const meB = {
  birthYear: 2000,
};

// - Access value
// Dot notation
console.log(me.friends);

// Bracket notation
console.log(me["friends"]);

// - Update, change value
me.job = "Teacher";
me.friends[1] = "B";

// - Add a new pair of key and value (weight: 75)
me.weight = 75;
me.height = 165;
console.log(me);

// delete me.weight;
// console.log(me);

// const age = me.calcAge();
// console.log(age); // 25

// console.log(me.getThis());

// console.log(me.calcAge());
me.checkLegal();
console.log(me);

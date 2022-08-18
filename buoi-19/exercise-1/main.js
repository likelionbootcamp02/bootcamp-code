const person1 = {
  name: "Tam",
  height: 190,
  weight: 60,
  calcBMI: function () {
    this.bmi = (this.weight / (this.height / 100) ** 2).toFixed(2);
    return this.bmi;
  },
  getStatus: function () {
    this.calcBMI();
    this.status =
      this.bmi < 18.5 ? "Underweight" : this.bmi < 25 ? "Normal" : "Overweight";
  },
};

const person2 = {
  name: "Huong",
  height: 170,
  weight: 100,
  calcBMI: function () {
    this.bmi = (this.weight / (this.height / 100) ** 2).toFixed(2);
    return this.bmi;
  },
  getStatus: function () {
    this.calcBMI();
    this.status =
      this.bmi < 18.5 ? "Underweight" : this.bmi < 25 ? "Normal" : "Overweight";
  },
};

// person1.calcBMI();
// person2.calcBMI();

console.log(person1.calcBMI());
console.log(person2.calcBMI());

if (person1.calcBMI() > person2.calcBMI()) {
  console.log("Person 1's BMI is higher than 2");
} else {
  console.log("Person 2's BMI is higher than 1");
}

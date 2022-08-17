const heightA = prompt("Chieu cao cua A: ");
const weightA = prompt("Can nang cua A: ");

const heightB = prompt("Chieu cao cua B: ");
const weightB = prompt("Can nang cua B: ");

const bmiA = weightA / (heightA / 100) ** 2;
const bmiB = weightB / (heightB / 100) ** 2;
console.log(bmiA);
console.log(bmiB);

if (bmiA > bmiB) {
  const result1 = bmiA - bmiB;
  console.log(`BMI cua A lon hon ${result1} kg/m2 so voi BMI cua B`);
} else if (bmiA < bmiB) {
  const result2 = bmiB - bmiA;
  console.log(`BMI cua A nho hon ${result2} kg/m2 so voi BMI cua B`);
} else {
  console.log("BMI cua A bang BMI cua B");
}

// User entering
const mathA = Number(prompt("Math Score A: "));
const chemistryA = Number(prompt("Chemistry Score A: "));
const physicsA = Number(prompt("Physics Score A: "));

const mathB = Number(prompt("Math Score B: "));
const chemistryB = Number(prompt("Chemistry Score B: "));
const physicsB = Number(prompt("Physics Score B: "));

// Calculate GPA
const gpaA = (mathA + chemistryA + physicsA) / 3;
console.log(gpaA);

const gpaB = (mathB + chemistryB + physicsB) / 3;
console.log(gpaB);

// Conditional Statement
if (gpaA > gpaB) {
  const result = gpaA - gpaB;
  const resultFixed = result.toFixed(2);
  console.log(`A win more than ${resultFixed} scores`);
} else if (gpaA < gpaB) {
  const result = gpaB - gpaA;
  const resultFixed = result.toFixed(2);
  console.log(`B win more than ${resultFixed} scores`);
} else {
  console.log(`A and B win with same ${gpaA}`);
}

/**
 * Calculate GPA
 * @param {number} mathScore - Score of math
 * @param {number} physicScore - Score of physics
 * @param {number} chemistryScore - Score of chemistry
 * @returns {number} - GPA
 */
const calcGPA = (mathScore, physicScore, chemistryScore) =>
  (mathScore + physicScore + chemistryScore) / 3;

/**
 * Compare 2 GPA
 * @param {number} gpa1 - GPA of A
 * @param {number} gpa2 - GPA of B
 * @return {string} - Results of GPA comparison
 */
const compareGPA = (gpa1, gpa2) => {
  //   if (gpa1 > gpa2) {
  //     return "A win";
  //   } else if (gpa1 < gpa2) {
  //     return "B win";
  //   }
  //   return "A bang B";

  return gpa1 > gpa2 ? "A win" : gpa1 < gpa2 ? "B win" : "A bang B";
};

// Step 1: Calculate GPA of A and B
const gpaA = calcGPA(9, 10, 10);
const gpaB = calcGPA(8, 10, 10);

// Step 2: Compare GPA between A and B
const result = compareGPA(gpaA, gpaB);
console.log(result);

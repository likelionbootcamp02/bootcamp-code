/**
 * Return the array of tip percents based on bills
 * @param {Object} bills Array of bills
 * @param {number} minBill The minimum bill (default is 50)
 * @param {number} maxBill The maximum bill (default is 300)
 * @returns {Object} Array of tip percents
 */
function calcTipPercents(bills, minBill = 50, maxBill = 300) {
  const tips = [];
  for (let i = 0; i < bills.length; i++) {
    let tip = 0.2;
    if (bills[i] >= minBill && bills[i] <= maxBill) {
      tip = 0.15;
    }
    tips.push(tip);
  }
  return tips;
}

/**
 * Return an array of total bill without discount
 * @param {Object} bills Array of bills
 * @param {Object} tipPercents Array of tip percents
 * @returns {Object} Array of total bill without discount
 */
function calcTotalBillWithoutDiscount(bills, tipPercents) {
  const totalBills = [];
  for (let i = 0; i < bills.length; i++) {
    const total = bills[i] * (1 + tipPercents[i]);
    totalBills.push(total.toFixed(2));
  }
  return totalBills;
}

/**
 * Return an array of discount based on condition
 * @param {Object} people Array of people
 * @returns {Object} Array of discount
 */
function getDiscounts(people) {
  const discounts = [];
  for (let i = 0; i < people.length; i++) {
    let discount = 0;
    if (people[i] === 1 || people[i] >= 5) {
      discount = 0.1;
    }
    discounts.push(discount);
  }
  return discounts;
}

/**
 * Return total bill after discount
 * @param {Object} bills Array of bills
 * @param {Object} discounts Array of discounts
 * @returns {number} Total bill after discount
 */
function calcTotalBillAfterDiscount(bills, discounts) {
  let total = 0;
  for (let i = 0; i < bills.length; i++) {
    total += bills[i] * (1 - discounts[i]);
  }
  return total.toFixed(2);
}

/**
 * Return the average payment of each person
 * @param {number} totalBill Total bill
 * @param {Object} people Array of people
 * @returns {number} Average payment
 */
function calcAveragePersonPayment(totalBill, people) {
  let totalOfPeople = 0;
  for (let i = 0; i < people.length; i++) {
    totalOfPeople += people[i];
  }
  return (totalBill / totalOfPeople).toFixed(2);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const peoples = [1, 5, 3, 7, 2, 6, 4, 10, 4, 2];

// Step 1: Get tips array (para: bills) -> Return tips array
const tipPercents = calcTipPercents(bills, 150);

// Step 2: Get total bills array without discount (para: bills, tips)
const billsWithoutDiscount = calcTotalBillWithoutDiscount(bills, tipPercents);

// Step 3: Get discount array (para: people)
const discounts = getDiscounts(peoples);

// Step 4: Calculate total bill (para: totalBill, discount)
const totalBill = calcTotalBillAfterDiscount(billsWithoutDiscount, discounts);

// Step 5: Calculate the average of person payment (para: discountedTotalBill, people)
const eachPerson = calcAveragePersonPayment(totalBill, peoples);

// Show result
console.log(
  `Total bill today is ${totalBill}$, the average payment each person paid ${eachPerson}$`
);

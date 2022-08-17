// const bill = 80;
// const numOfPeople = 4;
// let tipPct = bill >= 10 && bill <= 60 ? 0.2 : 0.15;

// if (bill >= 10 && bill <= 60) {
//   tipPct = 0.2;
// } else {
//   tipPct = 0.15;
// }

// const totalBill = bill + bill * tipPct;
// const eachPerson = totalBill / numOfPeople;
// console.log(`Tong cong ${totalBill} va moi nguoi phai tra la ${eachPerson}`);

// 1. calcTipPct function
// 2. calcTotalBill function
// 3. eachPersonPayment function

/**
 * Calculate tip percentage based on bill
 * @param {number} bill - The original bill
 * @returns {number} - The tip percentage
 */
function calcTipPct(bill) {
  return bill >= 10 && bill <= 60 ? 0.2 : 0.15;
}

/**
 * Calculate total bill
 * @param {number} bill - The original bill
 * @param {number} tipPct - The tip percentage
 * @returns {number} - The total bill
 */
function calcTotalBill(bill, tipPct) {
  return bill + bill * tipPct;
}

/**
 * Calculate each person payment
 * @param {number} totalBill - The total bill (have tip)
 * @param {number} numOfPeople - Number of people
 * @returns {number} - The payment of each person
 */
function eachPersonPayment(totalBill, numOfPeople) {
  return (totalBill / numOfPeople).toFixed(1);
}



const originalBill = 50;
const quantityOfPeople = 7;

// Step 1: Calculate Tip Percentage
const tipPercent = calcTipPct(originalBill);

// Step 2: Calculate Total Bill
const totalBill = calcTotalBill(originalBill, tipPercent);

// Step 3: Calculate payment per person
const eachPerson = eachPersonPayment(totalBill, quantityOfPeople);

console.log(eachPerson);

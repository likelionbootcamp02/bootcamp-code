function calculate(num1, num2, calcHandler) {
  return calcHandler(num1, num2);
}

function sum(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

console.log(calculate(10, 20, sum));
console.log(calculate(10, 20, substract));

// forEach

function calcTotal1(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function calcTotal2(arr) {
  let total = 0;
  arr.forEach(function (element) {
    total += element;
  });
  return total;
}

// arr.map
// [2,4,6,8]

function doubleValue(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

function doubleValue2(arr) {
  const results = arr.map(function (value) {
    return value * 2;
  });

  return results;
}

function convertTo2(arr) {
  const results = arr.map(function (value) {
    if (value >= 2) {
      return 2;
    }
    return value;
  });

  return results;
}

// arr.filter
function filterOver2(arr) {
  const results = arr.filter(function (value) {
    return value >= 2;
  });

  return results;
}

const products = [
  {
    id: 1,
    title: "Ao so mi",
    category: "Ao",
    price: 200000,
    code: "1",
    isSold: true,
    rate: 5,
  },
  {
    id: 2,
    title: "Quan khaki",
    category: "Quan",
    price: 300000,
    isSold: true,
    rate: 5,
  },
  {
    id: 3,
    title: "Ao hoodie",
    category: "Ao",
    price: 250000,
    isSold: true,
    rate: 5,
  },
  {
    id: 4,
    title: "Quan short",
    category: "Quan",
    price: 100000,
    isSold: true,
    rate: 2,
  },
  {
    id: 5,
    title: "Tank top",
    category: "Phu Kien",
    price: 150000,
    isSold: true,
    rate: 5,
  },
];

function filterByRate(arr, rate) {
  return arr.filter(function (item) {
    return item.rate === rate;
  });
}

function filterByCategory(arr, cat) {
  return arr.filter(function (item) {
    return cat.includes(item.category);
  });
}

// console.log(filterByRate(products));

const arr = [1, 2, 3, 4];

function calcTotal3(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function calcTotal4(arr) {
  return arr.reduce(function (total, value) {
    return total + value;
  }, 0);
}

function calcTotalBill(products) {
  return products.reduce(function (total, product) {
    return total + product.price;
  }, 0);
}

function checkIsSold(products) {
  return products.every(function (product) {
    return product.isSold;
  });
}

function getItemOver250(products) {
  return products.find(function (product) {
    return product.price >= 250000;
  });
}

function getIndexOver250(products) {
  return products.findIndex(function (product) {
    return product.price >= 250000;
  });
}

console.log(getItemOver250(products));
console.log(getIndexOver250(products));



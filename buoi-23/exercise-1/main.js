const counter = document.querySelector(".counter");
function init(initialValue = 0) {
  counter.innerHTML = initialValue;
}

function increaseCounter() {
  counter.innerHTML = parseInt(counter.innerHTML) + 5;
}

function decreaseCounter() {
  counter.innerHTML = parseInt(counter.innerHTML) - 5;
}

function resetCounter() {
  counter.innerHTML = startNumber;
}

function randomizeCounter() {
  const randomNumber = Math.floor(Math.random() * 21);
  counter.innerHTML = randomNumber;
}

const startNumber = 5;
init(startNumber);

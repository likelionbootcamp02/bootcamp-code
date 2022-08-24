// document.querySelector(".btn").onclick = increaseCounter;

// function increaseCounter() {
//   document.querySelector(".counter").innerHTML++;
// }

// const controls = document.querySelectorAll(".control");

// for
// for (let i = 0; i < controls.length; i++) {
//   controls[i].onchange = lowercaseText;
// }

// for of
// for (let element of controls) {
//   element.onchange = function () {
//     lowercaseText(element);
//   };
// }

// function lowercaseText(el) {
//   el.value = el.value.toLowerCase();
// }

// const increaseBtn = document.querySelector(".btn-increase");
// const decreaseBtn = document.querySelector(".btn-decrease");
// const counter = document.querySelector(".counter");
// const price = document.querySelector(".price");

// const initialValue = 0;
// const eachPrice = 20000;

// counter.innerHTML = initialValue;
// price.innerHTML = initialValue * eachPrice;

// function increaseCounter() {
//   counter.innerHTML++;
// }

// function decreaseCounter() {
//   counter.innerHTML--;
// }

// function getPrice() {
//   price.innerHTML = parseInt(counter.textContent) * eachPrice;
// }

// increaseBtn.addEventListener("click", increaseCounter);
// decreaseBtn.addEventListener("click", decreaseCounter);

// increaseBtn.addEventListener("click", getPrice);
// decreaseBtn.addEventListener("click", getPrice);

// document.addEventListener("click", function () {
//   console.log("Clicked");
// });

const content = document.querySelector(".content");

function toggleText() {
  if (content.style.display === "none") {
    content.style.display = "block";
    content.addEventListener("click", function (e) {
      changeToRed(e.target);
    });
  } else {
    content.style.display = "none";
    content.removeEventListener("click", function (e) {
      changeToRed(e.target);
    });
    content.style.color = "black";
  }
}

function changeToRed(el) {
  el.style.color = "red";
}

document.querySelector(".toggle-btn").addEventListener("click", toggleText);

document.querySelector(".heading").addEventListener("click", function (e) {
  changeToRed(e.target);
});

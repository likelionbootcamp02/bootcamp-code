// document.querySelector(".btn").onclick = increaseCounter;

// function increaseCounter() {
//   document.querySelector(".counter").innerHTML++;
// }

const controls = document.querySelectorAll(".control");

// for
// for (let i = 0; i < controls.length; i++) {
//   controls[i].onchange = lowercaseText;
// }

// for of
for (let element of controls) {
  element.onchange = function () {
    lowercaseText(element);
  };
}

function lowercaseText(el) {
  el.value = el.value.toLowerCase();
}

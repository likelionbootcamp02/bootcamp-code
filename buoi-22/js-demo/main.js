// Document Object Model
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);

// const friends = 200;
// document.body.innerHTML = `<h1>Hello ${friends} anh em</h1>`;

// document.body.textContent = `<h1>Hello ${friends} anh em</h1>`;
// console.log([document.getElementById("demo")]);
// document.getElementById("demo").innerHTML = "Hello World";

// console.log(document.getElementsByTagName("p")[0].innerHTML);

// document.getElementsByTagName("p")[0].innerHTML = "Hello World";

// document.getElementsByTagName("p")[1].innerHTML = "Hello World";

// document.getElementsByTagName("p")[2].innerHTML = "Hello World";

// // for
// const pCollection = document.getElementsByTagName("p");
// for (let i = 0; i < pCollection.length; i++) {
//   pCollection[i].innerHTML = "Hello World";
// }

// // for of
// for (let element of pCollection) {
//   element.innerHTML = "Hello World";
// }

// Good morning
// getElementsByClassName

// const pGreetingCollection = document.getElementsByClassName("greeting"); // HTMLCollection

// for (let element of pGreetingCollection) {
//   element.innerHTML = "Good morning";
// }

// console.log(document.querySelectorAll(".greeting")); // NodeList

// console.log(document.getElementsByClassName("greeting")); // HTMLCollection

// console.dir(document.querySelector(".banner"));

// document.querySelector(".banner").src = "./img/dog.avif";
// document.querySelector(".banner").height = 200;
// document.querySelector(".banner").alt = "Dog";

// document.querySelector(".banner").setAttribute("src", "./img/dog.avif");
// document.querySelector(".heading").style.color = "red";

// console.log(document.querySelector(".heading").style);

// Cach 1
// document.querySelector(".heading").className += " active";

// Cach 2
// document.querySelector(".heading").classList.add("active");

function toggleButton() {
  const el = document.querySelector("h2");
  el.style.display = el.style.display == "none" ? "block" : "none";
}

function hoverHeading(element) {
  element.style.color = "red";
}

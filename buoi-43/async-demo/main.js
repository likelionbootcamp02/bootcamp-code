// const title = document.querySelector(".title");
// title.innerHTML = "Hello Likelion";
// alert("This is alert!!");
// title.style.color = "red";

// window.alert("asdsdsadasd");

// function handler() {
//   console.log("Ok");
// }

// setTimeout(handler, 2000);
// setInterval(handler, 1000);

// console.log("Order pizza");

// setTimeout(function () {
//   console.log("Arrived");
// }, 0);

// console.log("Eat");

// setTimeout(function () {
//   console.log("Arrived");
//   setTimeout(function () {
//     console.log("Eat");
//     setTimeout(function () {
//       console.log("Clean");
//       setTimeout(function () {
//         console.log("Di choi");
//         setTimeout(function () {
//           console.log("Danh rang");
//           setTimeout(function () {
//             console.log("Ngu");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 2000);

// setTimeout(function () {
//   console.log("Movie Done");
// }, 3500);

// console.log("Order pizza");

// setTimeout(function () {
//   console.log("Arrived");
// }, 2000);

// setTimeout(function () {
//   console.log("Clean");
// }, 1000);

// console.log("Eat");

// const productContainer = document.querySelector("#products");

// const xhttp = new XMLHttpRequest();
// xhttp.open("GET", "https://dummyjson.com/products");
// xhttp.send();

// xhttp.addEventListener("load",function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);

//   function generateHTML(product) {
//     return `
//     <div class="card">
//         <img
//             src=${product.thumbna il}
//             class="card-img-top"
//             alt="..."
//         />
//         <div class="card-body">
//             <h5 class="card-title">${product.title}</h5>
//             <p class="card-text">
//             ${product.description}
//             </p>
//             <a href="#" class="btn btn-primary">Read More</a>
//         </div>
//     </div>
//   `;
//   }

//   productContainer.innerHTML = `
//     <div class="container">
//         <div class="row row-cols-4">
//             ${data.products
//               .slice(0, 10)
//               .map(function (product) {
//                 return generateHTML(product);
//               })
//               .join("")}
//         </div>
//     </div>
//   `;
// });

// fetch("https://dummyjson.com/products")
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Pizza");
//   }, 3000);
// })
//   .then(function (data) {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         reject("Error message");
//       }, 2000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve("Clean");
//       }, 1000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// ES6
// async await
// const productContainer = document.querySelector("#products");

// async function render() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();
//     productContainer.innerHTML = `
//     <div class="container">
//         <div class="row row-cols-4">
//             ${data.products
//               .slice(0, 10)
//               .map(function (product) {
//                 return generateHTML(product);
//               })
//               .join("")}
//         </div>
//     </div>
//   `;
//   } catch (error) {
//     console.log(error);
//   }
// }

// function generateHTML(product) {
//   return `
//     <div class="card">
//         <img
//             src=${product.thumbnail}
//             class="card-img-top"
//             alt="..."
//         />
//         <div class="card-body">
//             <h5 class="card-title">${product.title}</h5>
//             <p class="card-text">
//             ${product.description}
//             </p>
//             <a href="#" class="btn btn-primary">Read More</a>
//         </div>
//     </div>
//   `;
// }

// render();

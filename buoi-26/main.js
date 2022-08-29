// Use bc
const bcArray = ["Home", "Library"];
const bcElement = document.querySelector("#main");
const bc = Breadcrumb.createBreadcrumb(bcArray);
bcElement.appendChild(bc);

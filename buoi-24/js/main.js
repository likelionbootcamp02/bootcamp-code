function collaspe() {
  const btnList = document.querySelectorAll("[data-toggle='collapse']");

  for (let btn of btnList) {
    const selector = btn.attributes["data-target"].nodeValue;
    const item = document.querySelector(selector);
    btn.addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  }
}

collaspe();

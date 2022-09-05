const slideBtnList = document.querySelectorAll("[data-bs-slide]");
let current = 0;

// Carousel slide button
for (let slideBtn of slideBtnList) {
  const targetSelector = slideBtn.dataset.bsTarget;

  const target = document.querySelector(targetSelector);

  const itemList = target.querySelectorAll(".carousel-item");

  // Reset
  itemList[current].classList.add("active");

  if (current === 0 && slideBtn.dataset.bsSlide === "prev") {
    slideBtn.classList.add("hidden");
  }

  if (current === itemList.length - 1 && slideBtn.dataset.bsSlide === "next") {
    slideBtn.classList.add("hidden");
  }

  slideBtn.addEventListener("click", function (e) {
    // Get slide value (prev, next)
    const slideValue = e.target.closest("[data-bs-slide]").dataset.bsSlide;

    // Get buttons
    const btns = target.querySelectorAll("[data-bs-slide]");

    // Check slide value includes prev, next or not
    if (!["prev", "next"].includes(slideValue)) return;

    // Remove active class in current item
    itemList[current].classList.remove("active");

    // Remove active in current indicator
    indicatorBtnList[current].classList.remove("active");

    if (slideValue === "prev") {
      current = current === 0 ? itemList.length - 1 : current - 1;
    } else if (slideValue === "next") {
      current = current === itemList.length - 1 ? 0 : current + 1;
    }

    // Check current is 0 or last index
    if (current === 0 || current === itemList.length - 1) {
      this.classList.add("hidden");
    } else {
      for (let btn of btns) {
        btn.classList.remove("hidden");
      }
    }

    // Slide carousel item
    for (let item of itemList) {
      item.style.transform = `translateX(${current * -100}%)`;
    }

    // Add active class to next item
    itemList[current].classList.add("active");

    // Add active in current indicator
    indicatorBtnList[current].classList.add("active");
  });
}

// Carousel Indicators Buttons
const indicatorBtnList = document.querySelectorAll("[data-bs-slide-to]");

for (let indicatorBtn of indicatorBtnList) {
  const targetSelector = indicatorBtn.dataset.bsTarget;

  const target = document.querySelector(targetSelector);

  const itemList = target.querySelectorAll(".carousel-item");

  indicatorBtn.addEventListener("click", function (e) {
    // Remove active class in current item
    itemList[current].classList.remove("active");

    // Remove active in current indicator
    indicatorBtnList[current].classList.remove("active");

    // Get current value
    current = parseInt(e.target.dataset.bsSlideTo);

    // Slide carousel item
    for (let item of itemList) {
      item.style.transform = `translateX(${current * -100}%)`;
    }

    // Add active class to next item
    itemList[current].classList.add("active");

    // Add active in current indicator
    indicatorBtnList[current].classList.add("active");
  });
}

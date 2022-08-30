const Collapse = {
  init: function () {
    const collapseBtnList = document.querySelectorAll(
      "[data-bs-toggle='collapse']"
    );

    for (let collapseBtn of collapseBtnList) {
      const targetSelector = collapseBtn.getAttribute("data-bs-target");
      const target = document.querySelector(targetSelector);
      target.style.height = 0;

      collapseBtn.addEventListener("click", function () {
        if (target.classList.contains("show")) {
          target.classList.remove("show");
          target.style.height = 0;
        } else {
          target.classList.add("show");
          target.style.height = `${target.children[0].offsetHeight}px`;
        }
      });
    }
  },
};

Collapse.init();

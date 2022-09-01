const Tabs = {
  init: function () {
    const tabBtnList = document.querySelectorAll("[data-bs-toggle='pill']");

    for (let tabBtn of tabBtnList) {
      const targetSelector = tabBtn.getAttribute("data-bs-target");

      const target = document.querySelector(targetSelector);

      const _this = this;

      tabBtn.addEventListener("click", function () {
        // Handle tabs
        _this.addActive(this, ".nav", ".nav-link");

        // Handle content
        _this.addActive(target, ".tab-content", ".tab-pane");
      });
    }
  },
  addActive: function (element, parentClass, childClass) {
    // Handle tabs
    const parent = element.closest(parentClass);
    const children = parent.querySelectorAll(childClass);

    for (let child of children) {
      child.classList.remove("active");
    }
    element.classList.add("active");
  },
};

Tabs.init();

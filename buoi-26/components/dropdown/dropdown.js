const Dropdown = {
  init: function () {
    const dropdownBtnList = document.querySelectorAll(
      "[data-bs-toggle='dropdown']"
    );

    const _this = this;

    for (let dropdownBtn of dropdownBtnList) {
      const dropdown = dropdownBtn.closest(".dropdown");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");

      dropdownBtn.addEventListener("click", function (e) {
        if (!dropdownMenu.classList.contains("show")) {
          _this.removeShow();
        }

        dropdownMenu.classList.toggle("show");
      });
    }
  },
  clickOutside: function () {
    const _this = this;
    document.addEventListener("click", function (e) {
      if (!e.target.matches("[data-bs-toggle='dropdown']")) {
        _this.removeShow();
      }
    });
  },
  removeShow: function () {
    const dropdownMenuList = document.querySelectorAll(".dropdown-menu");
    for (let dropdownMenu of dropdownMenuList) {
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      }
    }
  },
};

Dropdown.init();
Dropdown.clickOutside();
Dropdown.removeShow();

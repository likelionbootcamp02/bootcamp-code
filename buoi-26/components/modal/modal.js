const Popup = {
  createName: function (name) {
    this.name = name;
  },
  createBackdrop: function () {
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop", "fade", "show");
    this.modalBackdrop = modalBackdrop;
  },
  triggerModal: function () {
    const modalBtnList = document.querySelectorAll(
      `[data-bs-toggle=${this.name}]`
    );
    for (let modalBtn of modalBtnList) {
      let targetSelector = modalBtn.getAttribute("data-bs-target");
      if (!targetSelector) {
        targetSelector = modalBtn.getAttribute("href");
      }
      const target = document.querySelector(targetSelector);

      const _this = this;

      modalBtn.addEventListener("click", function () {
        target.classList.add("show");
        document.body.appendChild(_this.modalBackdrop);
      });
    }
  },

  closeModalByButton: function () {
    const closeBtnList = document.querySelectorAll(
      `[data-bs-dismiss=${this.name}]`
    );
    const _this = this;

    for (let closeBtn of closeBtnList) {
      const target = closeBtn.closest(`.${this.name}`);

      closeBtn.addEventListener("click", function () {
        _this.closeModal(target);
      });
    }
  },

  clickOutside: function () {
    const _this = this;

    window.addEventListener("click", function (e) {
      if (
        e.target.matches(".modal.show") ||
        e.target.matches(".modal-backdrop.show")
      ) {
        _this.closeModal(e.target);
      }
    });
  },

  closeModal: function (element) {
    if (!element.matches(".modal-backdrop.show")) {
      element.classList.remove("show");
    } else {
      const offcanvasList = document.querySelectorAll(".offcanvas");
      for (let canvas of offcanvasList) {
        canvas.classList.remove("show");
      }
    }
    document.body.removeChild(this.modalBackdrop);
  },
};
Popup.createName("modal");
Popup.createBackdrop();
Popup.triggerModal();
Popup.closeModalByButton();
Popup.clickOutside();

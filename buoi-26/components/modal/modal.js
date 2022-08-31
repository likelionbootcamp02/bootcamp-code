const Modal = {
  createBackdrop: function () {
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("modal-backdrop", "fade", "show");
    this.modalBackdrop = modalBackdrop;
  },
  triggerModal: function () {
    const modalBtnList = document.querySelectorAll("[data-bs-toggle='modal']");
    for (let modalBtn of modalBtnList) {
      const targetSelector = modalBtn.getAttribute("data-bs-target");
      const target = document.querySelector(targetSelector);

      const _this = this;

      modalBtn.addEventListener("click", function () {
        target.classList.add("show");
        document.body.appendChild(_this.modalBackdrop);
      });
    }
  },

  closeModalByButton: function () {
    const closeBtnList = document.querySelectorAll("[data-bs-dismiss='modal']");
    const _this = this;

    for (let closeBtn of closeBtnList) {
      const target = closeBtn.closest(".modal");

      closeBtn.addEventListener("click", function () {
        _this.closeModal(target);
      });
    }
  },

  clickOutside: function () {
    const _this = this;

    window.addEventListener("click", function (e) {
      if (e.target.matches(".modal.show")) {
        _this.closeModal(e.target);
      }
    });
  },

  closeModal: function (element) {
    element.classList.remove("show");
    document.body.removeChild(this.modalBackdrop);
  },
};

Modal.createBackdrop();
Modal.triggerModal();
Modal.closeModalByButton();
Modal.clickOutside();

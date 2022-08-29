const Breadcrumb = {
  createBreadcrumb: function (list) {
    // Create element ol
    const bc = document.createElement("ol");

    // Add class breadcrumb
    bc.classList.add("breadcrumb");

    // Add children
    for (let i = 0; i < list.length; i++) {
      if (i === list.length - 1) {
        bc.innerHTML += `
      <li class="breadcrumb-item active">${list[i]}</li>
      `;
      } else {
        bc.innerHTML += `
          <li class="breadcrumb-item"><a href="#">${list[i]}</a></li>
          `;
      }
    }
    return bc;
  },
};

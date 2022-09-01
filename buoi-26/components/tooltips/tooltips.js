const tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");

for (let tooltip of tooltips) {
  const title = tooltip.getAttribute("title");
  tooltip.style.setProperty("--tooltip-title", `"${title}"`);
}

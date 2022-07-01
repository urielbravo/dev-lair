const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("-translate-x-full");
});

document.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});
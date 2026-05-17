const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const chips = document.querySelectorAll(".chip");
const workCards = document.querySelectorAll(".work-card");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.getAttribute("data-filter");

    workCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
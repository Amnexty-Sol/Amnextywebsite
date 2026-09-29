// AMNEXTY WEBSITE INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".desktop-nav");

  // Mobile navigation
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("mobile-open");

      menuButton.textContent =
        navigation.classList.contains("mobile-open") ? "×" : "☰";
    });
  }

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        navigation?.classList.remove("mobile-open");

        if (menuButton) {
          menuButton.textContent = "☰";
        }
      }
    });
  });

});

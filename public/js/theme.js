document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (themeToggle) {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
      if (savedTheme === "dark-mode") {
        themeToggle.checked = true;
      }
    }

    themeToggle.addEventListener("change", () => {
      body.classList.toggle("dark-mode");
      const theme = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
      localStorage.setItem("theme", theme);
    });
  }
});
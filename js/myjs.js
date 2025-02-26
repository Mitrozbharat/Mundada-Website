document.addEventListener("DOMContentLoaded", function () {
  // Get current page path
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Remove all existing active classes
  document.querySelectorAll("#main-navigation .nav a").forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to current page link
  document.querySelectorAll("#main-navigation .nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

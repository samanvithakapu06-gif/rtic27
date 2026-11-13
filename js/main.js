/* ==========================================================
   RTIC'27 - main.js
   Shared script for ALL pages. Only the coordinator edits it.
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");

  /* 1. Open and close the menu on phones */
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    /* Close the menu after a link is tapped */
    links.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    /* Close the menu with the Escape key */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* 2. Highlight the link of the page you are on */
  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* 3. Fill in the current year in the footer */
  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
});
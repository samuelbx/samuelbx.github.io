document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-tooltip");

  toggleButtons.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      const tooltipContent = toggle.closest('.item').querySelector('.tooltip-content');

      document.querySelectorAll(".tooltip-content").forEach(content => {
        if (content !== tooltipContent) {
          content.style.maxHeight = null;
          content.classList.add("collapsed");
          content.closest('div.item').querySelector('.toggle-tooltip').textContent = "[+]";
        }
      });

      if (tooltipContent.classList.contains("collapsed")) {
        tooltipContent.classList.remove("collapsed");
        tooltipContent.style.maxHeight = tooltipContent.scrollHeight + "px";
        toggle.textContent = "[-]";
      } else {
        tooltipContent.style.maxHeight = null;
        tooltipContent.classList.add("collapsed");
        toggle.textContent = "[+]";
      }
    });
  });
});

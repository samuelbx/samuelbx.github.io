document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-tooltip")
  toggleButtons.forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault()
      const tooltipContent = toggle.closest(".item").querySelector(".tooltip-content")
      document.querySelectorAll(".tooltip-content").forEach(content => {
        if (content !== tooltipContent) {
          content.style.maxHeight = null
          content.classList.add("collapsed")
          content.closest("div.item").querySelector(".toggle-tooltip").textContent = "[+]"
        }
      })
      if (tooltipContent.classList.contains("collapsed")) {
        tooltipContent.classList.remove("collapsed")
        tooltipContent.style.maxHeight = tooltipContent.scrollHeight + "px"
        toggle.textContent = "[-]"
      } else {
        tooltipContent.style.maxHeight = null
        tooltipContent.classList.add("collapsed")
        toggle.textContent = "[+]"
      }
    })
  })

  const modalLinks = document.querySelectorAll(".modal-trigger")
  const overlay = document.querySelector(".modal-overlay")
  const body = document.body
  modalLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault()
      const modal = document.querySelector(link.dataset.modal)
      overlay.classList.add("active")
      modal.classList.add("active")
      body.classList.add("modal-open")
    })
  })

  const closeButtons = document.querySelectorAll(".modal-close")
  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".modal, .modal-overlay").forEach(el => el.classList.remove("active"))
      body.classList.remove("modal-open")
    })
  })

  overlay.addEventListener("click", () => {
    document.querySelectorAll(".modal, .modal-overlay").forEach(el => el.classList.remove("active"))
    body.classList.remove("modal-open")
  })
})

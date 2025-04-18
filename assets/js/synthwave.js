document.addEventListener("DOMContentLoaded", () => {
    // Add grid overlay and horizon elements
    const body = document.body
  
    const gridOverlay = document.createElement("div")
    gridOverlay.className = "grid-overlay"
    body.appendChild(gridOverlay)
  
    const horizon = document.createElement("div")
    horizon.className = "horizon"
    body.appendChild(horizon)
  
    // Animate skill bars if they exist
    const progressBars = document.querySelectorAll(".progress-bar")
    if (progressBars.length > 0) {
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("aria-valuenow") + "%"
        setTimeout(() => {
          bar.style.width = width
        }, 500)
      })
    }
  
    // Add parallax effect to grid
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      gridOverlay.style.transform = `translateY(${scrollPosition * 0.1}px)`
    })
  
    // Add neon flicker effect to section titles
    const sectionTitles = document.querySelectorAll(".section-title h2")
    sectionTitles.forEach((title) => {
      setInterval(() => {
        const randomOpacity = Math.random() * 0.3 + 0.7
        title.style.opacity = randomOpacity
      }, 2000)
    })
  
    // Add typing effect to intro text if it exists
    const introText = document.querySelector(".typed")
    if (introText) {
      const typed = new Typed(".typed", {
        strings: introText.getAttribute("data-typed-items").split(","),
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      })
    }
  })
  
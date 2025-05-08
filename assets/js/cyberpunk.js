document.addEventListener("DOMContentLoaded", () => {
    // Typed.js initialization
    const typed = new Typed("#typed", {
      strings: ["a Proud Member of Zero-Savvy", "a fan of CyberPunk", "a Blockchain Enthusiast", "an Applied Cryptographer"],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    })
  
    // Mobile navigation toggle
    const mobileNavToggle = document.getElementById("mobile-nav-toggle")
    const navLinks = document.getElementById("nav-links")
  
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active")
        // Close mobile menu when clicking on a link
        const navItems = navLinks.querySelectorAll("a")
        navItems.forEach(item => {
          item.addEventListener("click", () => {
            navLinks.classList.remove("active")
          })
        })
      })
    }
  
    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("active") && 
          !navLinks.contains(e.target) && 
          e.target !== mobileNavToggle) {
        navLinks.classList.remove("active")
      }
    })
  
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".skill-progress")
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width") + "%"
        bar.style.width = width
      })
    }
  
    // Initialize skill bars animation when in viewport
    const skillsSection = document.querySelector("#skills")
  
    if (skillsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(animateSkillBars, 300)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )
  
      observer.observe(skillsSection)
    }
  
    // Glitch effect on scroll
    window.addEventListener("scroll", () => {
      const glitchTexts = document.querySelectorAll(".glitch-text")
  
      glitchTexts.forEach((text) => {
        const randomValue = Math.random()
  
        if (randomValue < 0.01) {
          text.style.textShadow = `2px 0 var(--neon-magenta), -2px 0 var(--neon-cyan)`
  
          setTimeout(() => {
            text.style.textShadow = ""
          }, 100)
        }
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Terminal typing effect
    const terminalLines = document.querySelectorAll(".terminal-line")
  
    terminalLines.forEach((line, index) => {
      line.style.opacity = "0"
  
      setTimeout(
        () => {
          line.style.opacity = "1"
        },
        300 * (index + 1),
      )
    })
  
    // Random glitch effect for terminal
    setInterval(() => {
      const terminals = document.querySelectorAll(".terminal")
  
      terminals.forEach((terminal) => {
        if (Math.random() < 0.1) {
          terminal.style.transform = `translateX(${Math.random() * 4 - 2}px)`
  
          setTimeout(() => {
            terminal.style.transform = "translateX(0)"
          }, 100)
        }
      })
    }, 3000)
  
    // Back to top button
    const backToTop = document.querySelector(".back-to-top")
  
    if (backToTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.classList.add("active")
        } else {
          backToTop.classList.remove("active")
        }
      })
  
      backToTop.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // Handle window resize for responsive design
    window.addEventListener("resize", () => {
      // Reset mobile menu state on window resize
      if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
      }
    })
  })
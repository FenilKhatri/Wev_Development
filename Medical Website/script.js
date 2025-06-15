document.addEventListener("DOMContentLoaded", () => {
      const contactForm = document.getElementById("contactForm")
      if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
                  validateForm(e)
            })
      }

      const anchorLinks = document.querySelectorAll('a[href^="#"]')
      anchorLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                  e.preventDefault()
                  const targetId = this.getAttribute("href")
                  const targetElement = document.querySelector(targetId)
                  if (targetElement) {
                        window.scrollTo({
                              top: targetElement.offsetTop - 80,
                              behavior: "smooth",
                        })
                  }
            })
      })

      const backToTopBtn = document.getElementById("backToTopBtn")
      if (backToTopBtn) {
            window.addEventListener("scroll", () => {
                  if (window.pageYOffset > 300) {
                        backToTopBtn.classList.add("visible")
                  } else {
                        backToTopBtn.classList.remove("visible")
                  }
            })
            backToTopBtn.addEventListener("click", () => {
                  window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                  })
            })
      }

      const animateElements = document.querySelectorAll(".animate-on-scroll")
      const checkScroll = () => {
            animateElements.forEach((element) => {
                  const elementPosition = element.getBoundingClientRect().top
                  const screenPosition = window.innerHeight / 1.2

                  if (elementPosition < screenPosition) {
                        element.classList.add("animate")
                  }
            })
      }
      checkScroll()
      window.addEventListener("scroll", checkScroll)
})

function validateForm(event) {
      event.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const comments = document.getElementById("comments").value

      const formMessage = document.getElementById("formMessage")

      if (!name || !email || !phone || !comments) {
            showMessage("Please fill in all fields", "danger")
            return false
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
            showMessage("Please enter a valid email address", "danger")
            return false
      }

      const phoneRegex = /^\d{10}$/
      if (!phoneRegex.test(phone)) {
            showMessage("Please enter a valid 10-digit phone number", "danger")
            return false
      }

      showMessage("Thank you for contacting us! We will get back to you soon.", "success")
      document.getElementById("contactForm").reset()
      console.log("Form submitted with:", { name, email, phone, comments })

      return false
      
}

function showMessage(message, type) {
      const formMessage = document.getElementById("formMessage")
      if (formMessage) {
            formMessage.textContent = message
            formMessage.className = "mt-3 alert"
            formMessage.classList.add(type === "success" ? "alert-success" : "alert-danger")
            formMessage.classList.remove("d-none")

            setTimeout(() => {
                  formMessage.classList.add("d-none")
            }, 5000)
      }
}    

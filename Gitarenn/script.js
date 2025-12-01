document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        if (link.hash) {
          e.preventDefault();
          const targetId = link.hash.substring(1);
          const targetEl = document.getElementById(targetId);
          window.scrollTo({
            top: targetEl.offsetTop - 60, 
            behavior: "smooth"
          });
        }
      });
    });
  
    const btnLihatKoleksi = document.querySelector(".hero .btn");
    if (btnLihatKoleksi) {
      btnLihatKoleksi.addEventListener("click", (e) => {
        e.preventDefault();
        const targetEl = document.getElementById("gallery");
        window.scrollTo({
          top: targetEl.offsetTop - 60,
          behavior: "smooth"
        });
      });
    }
  
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formMessage = document.getElementById("formMessage");
        formMessage.textContent = "Terima kasih! Pesan Anda telah terkirim.";
        contactForm.reset();
        setTimeout(() => {
          formMessage.textContent = "";
        }, 5000);
      });
    }
  });
  
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("show");
    });
  });

  // 
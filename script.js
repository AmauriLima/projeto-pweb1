document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.main-nav ul');
  
  if (hamburger) {
      hamburger.addEventListener('click', function() {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
          
          const spans = hamburger.querySelectorAll('span');
          spans.forEach(span => {
              span.classList.toggle('active');
          });
      });
  }
  
  const navLinks = document.querySelectorAll('.main-nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          
          // Remover animação do hamburger
          const spans = hamburger.querySelectorAll('span');
          spans.forEach(span => {
              span.classList.remove('active');
          });
      });
  });
  
  window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
  });
  
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length > 0) {
      let currentTestimonial = 0;
      
      function showTestimonial() {
          testimonials.forEach(testimonial => {
              testimonial.style.opacity = '0.3';
              testimonial.style.transform = 'scale(0.95)';
          });
          
          testimonials[currentTestimonial].style.opacity = '1';
          testimonials[currentTestimonial].style.transform = 'scale(1)';
      }
      
      showTestimonial();
      
      setInterval(function() {
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          showTestimonial();
      }, 5000);
  }
  
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const email = this.querySelector('input[type="email"]').value;
          
          alert(`Email ${email} inscrito com sucesso! Em um site real, esta informação seria enviada a um servidor.`);
          this.reset();
      });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
});
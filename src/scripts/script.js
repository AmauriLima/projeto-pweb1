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
  
  const filterButtons = document.querySelectorAll('.filter-btn');
  const resourceCards = document.querySelectorAll('.resource-card');
  
  if (filterButtons.length > 0 && resourceCards.length > 0) {
      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              filterButtons.forEach(btn => btn.classList.remove('active'));
              
              button.classList.add('active');
              
              const filterValue = button.getAttribute('data-filter');
              
              resourceCards.forEach(card => {
                  if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                      card.style.display = 'flex';
                  } else {
                      card.style.display = 'none';
                  }
              });
          });
      });
  }
  
  const tabButtons = document.querySelectorAll('.tab-btn');
  const monthEvents = document.querySelectorAll('.month-events');
  
  if (tabButtons.length > 0 && monthEvents.length > 0) {
      tabButtons.forEach(button => {
          button.addEventListener('click', function() {
              tabButtons.forEach(btn => btn.classList.remove('active'));
              monthEvents.forEach(content => content.classList.remove('active'));
              
              this.classList.add('active');
              const month = this.getAttribute('data-month');
              document.getElementById(month).classList.add('active');
          });
      });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
      faqItems.forEach(item => {
          const question = item.querySelector('.faq-question');
          const answer = item.querySelector('.faq-answer');
          const toggle = item.querySelector('.faq-toggle');
          
          question.addEventListener('click', () => {
              faqItems.forEach(otherItem => {
                  if (otherItem !== item) {
                      otherItem.classList.remove('active');
                      otherItem.querySelector('.faq-toggle i').classList.remove('fa-minus');
                      otherItem.querySelector('.faq-toggle i').classList.add('fa-plus');
                  }
              });
              
              item.classList.toggle('active');
              const icon = toggle.querySelector('i');
              icon.classList.toggle('fa-plus');
              icon.classList.toggle('fa-minus');
          });
      });
  }
});
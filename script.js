// Mobile menu
  const menuBtn = document.getElementById('mobile-menu');
  const nav = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', scrollY > 120);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

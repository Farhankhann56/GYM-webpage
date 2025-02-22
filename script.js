// Smooth Scrolling for Nav Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Hero Slider
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  
  setInterval(nextSlide, 5000);
  showSlide(currentSlide);
  
  // Typed.js for Hero Text
  const typed = new Typed('#typed-text', {
    strings: ['Strength', 'Power', 'Potential'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Hero Animation
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Parallax Effect
  gsap.to('.parallax-bg', {
    y: '20%',
    scrollTrigger: {
      trigger: '.parallax-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
  
  // About Section Animation
  gsap.from('.content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    }
  });
  
  // Classes Animation
  gsap.utils.toArray('.class-card').forEach(card => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none reset'
      }
    });
  });
  
  // SVG Animation
  gsap.to('.gym-icon path', {
    strokeDasharray: 100,
    strokeDashoffset: 100,
    duration: 2,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
  });
  
  // Testimonials Animation with Infinite Scroll
  gsap.utils.toArray('.testimonial-card').forEach(card => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
    gsap.from(card.querySelector('.member-pic'), {
      scale: 0.8,
      opacity: 0,
      rotation: -15,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.2,
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
  });
  
  // Contact Form Animation
  gsap.from('.contact-form', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 80%',
      toggleActions: 'play none none reset'
    }
  });
  
  // Page Load Transition
  window.addEventListener('load', () => {
    gsap.from('body', {
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });
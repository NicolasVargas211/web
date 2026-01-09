// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Create floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// Hero animations con efectos avanzados
const heroTimeline = gsap.timeline();

heroTimeline
    .from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.hero-title', {
        y: 150,
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: 'power4.out',
        clearProps: 'all'
    }, '-=0.5')
    .from('.hero-title', {
        textShadow: '0 0 0px rgba(196, 30, 58, 0)',
        duration: 0.8,
        ease: 'power2.inOut'
    }, '-=0.8')
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        letterSpacing: '1em',
        duration: 1.2,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.cta-button', {
        y: 30,
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(2)'
    }, '-=0.3')
    .from('.scroll-indicator', {
        opacity: 0,
        y: -20,
        duration: 0.6
    }, '-=0.2');

// Floating kebabs animation
gsap.to('.floating-kebab', {
    y: '+=30',
    rotation: '+=5',
    duration: 3,
    ease: 'sine.inOut',
    stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true
    }
});

// Animated floating with random movement
document.querySelectorAll('.floating-kebab').forEach((kebab, index) => {
    gsap.to(kebab, {
        x: `+=${Math.random() * 40 - 20}`,
        y: `+=${Math.random() * 40 - 20}`,
        rotation: `+=${Math.random() * 20 - 10}`,
        duration: 4 + Math.random() * 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.5
    });
});

// Shapes animation
gsap.to('.shape', {
    rotation: 360,
    duration: 30,
    ease: 'none',
    repeat: -1,
    stagger: 5
});

// Button hover animation
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.08,
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            boxShadow: '0 0 0px rgba(212, 175, 55, 0)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// About section animation mejorada
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
    }
});

aboutTl
    .from('.about-text', {
        x: -150,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    })
    .from('.about-text p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.about-image', {
        x: 150,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=1')
    .from('.steam span', {
        y: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    }, '-=0.4');

// Menu cards stagger animation mejorada
const menuTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.menu-grid',
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
    }
});

menuTl
    .from('.menu-card', {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotationX: -15,
        duration: 0.8,
        stagger: {
            each: 0.15,
            from: 'start'
        },
        ease: 'back.out(1.5)'
    })
    .from('.menu-icon', {
        scale: 0,
        rotation: 180,
        duration: 0.5,
        stagger: 0.15,
        ease: 'back.out(2)'
    }, '-=0.6');

// Menu card hover animations avanzadas
const menuCards = document.querySelectorAll('.menu-card');
menuCards.forEach(card => {
    const icon = card.querySelector('.menu-icon');
    const badge = card.querySelector('.menu-badge');
    
    card.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            scale: 1.3,
            rotation: 15,
            y: -10,
            duration: 0.4,
            ease: 'back.out(2)'
        });
        
        gsap.to(badge, {
            rotation: 360,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
});

// Price Hook Section - Espectacular entrada
const priceHookTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.price-hook',
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
    }
});

priceHookTl
    .from('.price-hook-container', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(2)'
    })
    .from('.price-hook-label', {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.price-hook-number', {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)'
    }, '-=0.3')
    .from('.price-hook-description', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.detail-item', {
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    }, '-=0.3')
    .from('.price-cta', {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: 'back.out(1.7)'
    }, '-=0.2');

// Animación continua de pulso en el precio
gsap.to('.price-hook-number', {
    scale: 1.05,
    textShadow: '0 0 60px rgba(244, 228, 193, 1), 0 0 100px rgba(244, 228, 193, 0.6), 5px 5px 0 rgba(26, 26, 26, 0.3)',
    duration: 1.5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
});

// Animación de sparkles
gsap.to('.sparkle', {
    y: '+=20',
    rotation: '+=10',
    scale: 1.2,
    duration: 2,
    ease: 'sine.inOut',
    stagger: {
        each: 0.3,
        repeat: -1,
        yoyo: true
    }
});

// Hover effect en el contenedor de precio
const priceContainer = document.querySelector('.price-hook-container');
if (priceContainer) {
    priceContainer.addEventListener('mouseenter', () => {
        gsap.to(priceContainer, {
            scale: 1.02,
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4), 0 0 120px rgba(244, 228, 193, 0.4), inset 0 0 100px rgba(244, 228, 193, 0.15)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    priceContainer.addEventListener('mouseleave', () => {
        gsap.to(priceContainer, {
            scale: 1,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 100px rgba(244, 228, 193, 0.2), inset 0 0 80px rgba(244, 228, 193, 0.1)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// Ratings platforms animation
gsap.from('.platform-card', {
    scrollTrigger: {
        trigger: '.platforms-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    scale: 0.9,
    rotation: -5,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// Platform cards hover effects
document.querySelectorAll('.platform-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.rating-number'), {
            scale: 1.1,
            duration: 0.3,
            ease: 'back.out(2)'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.rating-number'), {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Why us features animation mejorada
const featuresTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse'
    }
});

featuresTl
    .from('.feature', {
        scale: 0.5,
        opacity: 0,
        y: 80,
        rotation: -10,
        duration: 0.8,
        stagger: {
            each: 0.2,
            from: 'random'
        },
        ease: 'back.out(1.7)'
    })
    .from('.feature-icon', {
        scale: 0,
        rotation: 360,
        duration: 0.6,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)'
    }, '-=0.5');

// Feature hover effect
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        gsap.to(feature, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    feature.addEventListener('mouseleave', () => {
        gsap.to(feature, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Gallery animation
gsap.from('.gallery-item', {
    scrollTrigger: {
        trigger: '.gallery-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    scale: 0.9,
    rotation: 5,
    duration: 0.8,
    stagger: {
        each: 0.15,
        from: 'random'
    },
    ease: 'power3.out'
});

// Testimonials animation
gsap.from('.testimonial-card', {
    scrollTrigger: {
        trigger: '.testimonials-container',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Location animation mejorada
gsap.from('.location-content', {
    scrollTrigger: {
        trigger: '.location',
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: 'power3.out'
});

// Footer animation mejorada
const footerTl = gsap.timeline({
    scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    }
});

footerTl
    .from('.footer-content h2', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.social-icons a', {
        y: 30,
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(2)'
    }, '-=0.3')
    .from('.copyright', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, '-=0.2');

// Social icons hover con bounce
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            scale: 1.3,
            rotation: 15,
            duration: 0.3,
            ease: 'elastic.out(1, 0.5)'
        });
    });
    
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Smooth scroll for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
            gsap.to(window, {
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                duration: 1.5,
                ease: 'power3.inOut'
            });
        }
    });
});

// Parallax effect for hero background
gsap.to('.hero-bg', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 300,
    opacity: 0.1,
    scale: 1.2
});

// Section titles animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'back.out(1.5)'
    });
});

// Continuous glow animation for title
gsap.to('.hero-title', {
    textShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.5), 4px 4px 0 rgba(244, 228, 193, 0.5)',
    duration: 2,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
});

// Parallax effect for gallery items
gsap.utils.toArray('.gallery-item').forEach((item, index) => {
    gsap.to(item.querySelector('.gallery-img'), {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: index % 2 === 0 ? -50 : 50
    });
});

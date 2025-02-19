// This file contains JavaScript code for interactive features of the portfolio website.

document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile view
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenuButton = document.querySelector('.close-menu-button');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('translate-x-full');
        });
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', function() {
            navMenu.classList.add('translate-x-full');
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of anchorLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Form validation example (for contact form)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            if (!name || !email) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }
});
// script.js
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.nav-bar');
const navbarHeight = navbar.getBoundingClientRect().height;

function handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scrolling down & past the navbar height
        navbar.classList.add('hidden');
    } else {
        // Scrolling up or at the top
        navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
}

// Initial call to set correct state on page load
handleScroll();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
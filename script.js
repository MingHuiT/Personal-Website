let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // ===== sticky navbar ===== //
    // If the vertical scroll position (window.scrollY) is greater than 100 pixels, it adds the class "sticky" to the header, 
    // which can be used to style the navbar as fixed or sticky.
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    // ===== remove toggle icon and navbar when click navbar link (scroll) ===== //
    // Removes the toggle classes from the menu icon and navbar when a navigation link within the navbar is clicked
    navbar.classList.remove('active');
};


// ===== scroll reveal ===== //
// This code utilizes the ScrollReveal library to animate the appearance of elements on scroll
// It applies specific reveal animations to different elements on the page based on their selectors and desired animation origins 
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .interest-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ===== type js ===== //
// This code initializes the Typed.js library to create a typewriter effect
// It display the strings 'Student' and 'Fresh-Grad' with a typing speed of 100 milliseconds per character, 
// a backspacing speed of 100 milliseconds per character when deleting, a delay of 1000 milliseconds after deleting, and the loop option set to true to continuously loop through the strings
const typed = new Typed('.multiple-text', {
    strings: ['Ming Hui', 'a Fresh-Grad', 'a Programming Newbie'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
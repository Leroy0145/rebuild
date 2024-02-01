const navLinks = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

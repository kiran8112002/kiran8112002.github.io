/*===== MENU SHOW / HIDE =====*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

/*===== CLOSE MENU ON LINK CLICK =====*/
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

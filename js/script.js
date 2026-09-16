const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

if (hamburger && navbarNav) {
    hamburger.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
            navbarNav.classList.remove('active');
        }
    });
}

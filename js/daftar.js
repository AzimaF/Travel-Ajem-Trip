const signInButton = document.getElementById('akun');
const loginModal = document.getElementById('modal-login');
const closeButton = loginModal ? loginModal.querySelector('.close') : null;

if (signInButton && loginModal) {
    signInButton.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'flex';
    });
}

if (closeButton && loginModal) {
    closeButton.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
}

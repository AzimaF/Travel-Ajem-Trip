document.querySelectorAll('[data-password-toggle]').forEach((toggle) => {
    const input = document.getElementById(toggle.dataset.passwordToggle);
    if (!input) return;
    toggle.addEventListener('click', () => {
        const visible = input.type === 'text';
        input.type = visible ? 'password' : 'text';
        toggle.textContent = visible ? 'Lihat' : 'Sembunyikan';
        toggle.setAttribute('aria-label', visible ? 'Tampilkan password' : 'Sembunyikan password');
    });
});

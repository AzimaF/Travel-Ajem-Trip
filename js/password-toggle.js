document.querySelectorAll('[data-password-toggle]').forEach((toggle) => {
    const input = document.getElementById(toggle.dataset.passwordToggle);
    if (!input) return;
    toggle.addEventListener('click', () => {
        const visible = input.type === 'text';
        input.type = visible ? 'password' : 'text';
        toggle.innerHTML = visible
            ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path><circle cx="12" cy="12" r="2.5"></circle></svg>'
            : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.6 6.2A10.8 10.8 0 0 1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-3.2 3.8M6.5 6.5C3.5 8.5 2 12 2 12s3.5 6 10 6a10.8 10.8 0 0 0 3.4-.5"></path></svg>';
        toggle.setAttribute('aria-label', visible ? 'Tampilkan password' : 'Sembunyikan password');
    });
});

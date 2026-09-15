document.getElementById('bookingForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const search = JSON.parse(localStorage.getItem('ajemtrip_search') || 'null');
    const offer = JSON.parse(localStorage.getItem('ajemtrip_offer') || 'null');
    if (!search || !offer) {
        alert('Data perjalanan tidak ditemukan. Silakan ulangi pencarian.');
        window.location.href = './filter.html';
        return;
    }
    const booking = {
        ...search, ...offer,
        checkInDate: document.getElementById('checkInDate').value,
        checkOutDate: document.getElementById('checkOutDate').value,
        quantity: Number(document.getElementById('quantity').value),
        seat: document.getElementById('seat').value.trim(),
        customerName: document.getElementById('name').value.trim(),
        nik: document.getElementById('nik').value.trim()
    };
    if (booking.checkOutDate < booking.checkInDate) {
        alert('Tanggal pulang tidak boleh lebih awal dari tanggal berangkat.');
        return;
    }
    localStorage.setItem('ajemtrip_booking', JSON.stringify(booking));
    window.location.href = './pembayaran.html';
});

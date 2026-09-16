const booking = JSON.parse(localStorage.getItem('ajemtrip_booking') || 'null');
const details = document.querySelector('.booking-details');
const total = document.querySelector('.total-amount p');

if (booking) {
    const amount = booking.price * booking.quantity;
    details.innerHTML = `<div><h3>${booking.name}</h3><p><strong>Pemesan:</strong> ${booking.customerName}</p><p><strong>Perjalanan:</strong> ${booking.origin} → ${booking.destination}</p><p><strong>Tanggal:</strong> ${booking.checkInDate} sampai ${booking.checkOutDate}</p></div>`;
    total.innerHTML = `<strong>Total:</strong> Rp${amount.toLocaleString('id-ID')}`;
}

document.getElementById('payment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!booking) {
        alert('Detail pesanan tidak ditemukan.');
        return;
    }
    const paidAt = new Date();
    const ticket = {
        ...booking,
        status: 'Lunas',
        code: `AJM-${Date.now().toString().slice(-6)}`,
        paidAt: paidAt.toISOString(),
        paymentMethod: 'Kartu Bank',
        paymentReference: `PAY-${Date.now().toString().slice(-8)}`
    };
    localStorage.setItem('ajemtrip_ticket', JSON.stringify(ticket));
    alert(`Pembayaran berhasil. Struk tersedia di halaman akun dengan kode ${ticket.code}.`);
    window.location.href = '../akun.html';
});

const search = JSON.parse(localStorage.getItem('ajemtrip_search') || 'null');
const results = document.getElementById('results');
const summary = document.getElementById('searchSummary');
const labels = { hotel: 'Hotel', flight: 'Pesawat', train: 'Kereta', bus: 'Bus' };
const offers = {
    hotel: { name: 'Bali Resort Hotel', detail: 'Kamar Deluxe • Sarapan termasuk', price: 450000 },
    flight: { name: 'Ajem Air', detail: 'Penerbangan langsung • Bagasi 20 kg', price: 1250000 },
    train: { name: 'Ajem Rail Executive', detail: 'Kursi nyaman • WiFi gratis', price: 350000 },
    bus: { name: 'Ajem Bus Premium', detail: 'Kursi reclining • USB charger', price: 180000 }
};

if (!search) {
    summary.textContent = 'Silakan lakukan pencarian terlebih dahulu.';
} else {
    const offer = offers[search.searchType];
    summary.innerHTML = `<p><strong>${labels[search.searchType]}</strong> · ${search.origin} → ${search.destination}<br>${search.departureDate} sampai ${search.returnDate}</p>`;
    results.innerHTML = `<nav class="hotel"><div class="result-item"><h3>${offer.name}</h3><p>${offer.detail}</p><p>Rute: ${search.origin} → ${search.destination}</p><p>Harga mulai: Rp${offer.price.toLocaleString('id-ID')}</p></div><div class="cek"><button id="chooseOffer" type="button" aria-label="Pilih ${offer.name}"><i data-feather="check"></i></button></div></nav>`;
    document.getElementById('chooseOffer').addEventListener('click', () => {
        localStorage.setItem('ajemtrip_offer', JSON.stringify(offer));
        window.location.href = './tiket.html';
    });
}

feather.replace();

const form = document.getElementById('searchForm');
const historyList = document.getElementById('searchList');

function renderHistory() {
    const searches = JSON.parse(localStorage.getItem('ajemtrip_searches') || '[]');
    historyList.innerHTML = searches.length
        ? searches.map((search) => `<li>${search.origin} → ${search.destination} (${search.searchType})</li>`).join('')
        : '<li>Belum ada pencarian.</li>';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const search = {
        searchType: document.getElementById('searchType').value,
        origin: document.getElementById('origin').value.trim(),
        destination: document.getElementById('destination').value.trim(),
        departureDate: document.getElementById('departureDate').value,
        returnDate: document.getElementById('returnDate').value
    };

    if (search.returnDate < search.departureDate) {
        alert('Tanggal pulang tidak boleh lebih awal dari tanggal berangkat.');
        return;
    }
    const searches = JSON.parse(localStorage.getItem('ajemtrip_searches') || '[]');
    localStorage.setItem('ajemtrip_searches', JSON.stringify([search, ...searches].slice(0, 5)));
    localStorage.setItem('ajemtrip_search', JSON.stringify(search));
    window.location.href = './hasil.html';
});

renderHistory();

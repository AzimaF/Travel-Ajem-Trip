document.getElementById('scheduleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookingType = document.getElementById('bookingType').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const repeatFrequency = document.getElementById('repeatFrequency').value;

    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = ''; // Clear previous schedule

    let currentDate = startDate;
    while (currentDate <= endDate) {
        const scheduleItem = document.createElement('nav');
        scheduleItem.className = 'schedule-item';
        scheduleItem.textContent = `${bookingType} booking on ${currentDate.toDateString()}`;
        scheduleList.appendChild(scheduleItem);

        // Increment date based on repeat frequency
        if (repeatFrequency === 'daily') {
            currentDate.setDate(currentDate.getDate() + 1);
        } else if (repeatFrequency === 'weekly') {
            currentDate.setDate(currentDate.getDate() + 7);
        } else if (repeatFrequency === 'monthly') {
            currentDate.setMonth(currentDate.getMonth() + 1);
        }
    }
});

document.getElementById('keluar').addEventListener('click', function (e) {
    e.preventDefault();
    if (confirm('Apakah Anda yakin tidak ingin mengubah jadwal tiket?')) {
        window.location.href = '../akun.html';
    }
});

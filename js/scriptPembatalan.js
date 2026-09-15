document.getElementById('cancellationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookingType = document.getElementById('bookingType').value;
    const bookingID = document.getElementById('bookingID').value;
    const reason = document.getElementById('reason').value;

    // Here you would typically send the data to the server
    // For this example, we just display a message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Your ${bookingType} booking with ID ${bookingID} has been cancelled for the following reason: ${reason}`;
    messageDiv.style.color = 'green';
});

document.getElementById('keluar').addEventListener('click', function (e) {
    e.preventDefault();
    if (confirm('Apakah Anda yakin tidak ingin membatalkan tiket?')) {
        window.location.href = '../akun.html';
    }
});
window.onload = function() {
    const storedStartDate = localStorage.getItem('startDate');
    const storedEndDate = localStorage.getItem('endDate');

    if (storedStartDate && storedEndDate) {
        const formattedStartDate = formatTanggal(storedStartDate);
        const formattedEndDate = formatTanggal(storedEndDate);
        document.getElementById('storedDates').textContent = `${formattedStartDate} - ${formattedEndDate}`;
    } else {
        document.getElementById('storedDates').textContent = 'Tanggal belum diatur';
    }
}

function formatTanggal(dateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('id-ID', options);
}

document.addEventListener('DOMContentLoaded', () => {
    const totalPrice = localStorage.getItem('totalPrice');
    if (totalPrice) {
        document.getElementById('totalPrice').textContent = `Rp ${parseInt(totalPrice).toLocaleString()}`;
    }
});
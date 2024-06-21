document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const dateString = today.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    document.getElementById('paymentDate').textContent = dateString;

    const totalPrice = localStorage.getItem('totalPrice');
    if (totalPrice) {
        document.getElementById('totalPrice').textContent = `Rp ${parseInt(totalPrice).toLocaleString()}`;
    }
});
document.getElementById('bookBtn').addEventListener('click', function() {
    // Get the date values from the inputs
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Store the values in localStorage
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);

    // Optionally, you can display a message to the user
});

// Function to load stored dates when the page loads
window.onload = function() {
    const storedStartDate = localStorage.getItem('startDate');
    const storedEndDate = localStorage.getItem('endDate');

    if (storedStartDate) {
        document.getElementById('startDate').value = storedStartDate;
    }
    if (storedEndDate) {
        document.getElementById('endDate').value = storedEndDate;
    }
}

document.getElementById('startDate').addEventListener('change', calculatePrice);
document.getElementById('endDate').addEventListener('change', calculatePrice);

function calculatePrice() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    if (startDate && endDate && endDate > startDate) {
        const oneMonth = 1000 * 60 * 60 * 24 * 30; 
        const diffInTime = endDate.getTime() - startDate.getTime();
        const months = Math.ceil(diffInTime / oneMonth);
        const totalPrice = months * 3000000;

        document.getElementById('finalPrice').innerText = totalPrice.toLocaleString();
        localStorage.setItem('totalPrice', totalPrice)
    }
}
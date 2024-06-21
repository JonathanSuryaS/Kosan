document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari submit default

        const loginEmail = document.getElementById('email').value;
        const loginPassword = document.getElementById('password').value;

        // Ambil data user dari LocalStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Validasi login
        if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
            loginMessage.style.color = 'green';
            loginMessage.textContent = 'Login successful!';
            // Redirect to home page or another page after successful login
            window.location.href = '/HomePage/HomePage.html';
        } else {
            loginMessage.style.color = 'red';
            loginMessage.textContent = 'Invalid email or password!';
        }
    });
});

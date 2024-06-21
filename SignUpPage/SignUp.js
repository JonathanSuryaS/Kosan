document.addEventListener('DOMContentLoaded', (event) => {
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari submit default

        const username = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value
        const confirmPassword = document.getElementById('confirm-pass').value;
        
        if (!username || !email || !password || !confirmPassword) {
            registerMessage.textContent = 'Please fill the required information!';
            return;
        } 

        // Validasi password
        if (password !== confirmPassword) {
            registerMessage.textContent = 'Passwords do not match!';
            return;
        }

        // Simpan data ke LocalStorage
        const user = {
            username: username,
            email: email,
            password: password,
            confirmPass: confirmPassword
        };
        localStorage.setItem('user', JSON.stringify(user));

        registerMessage.style.color = '#8DD06C';
        registerMessage.textContent = 'Registration successful!';
    });
});

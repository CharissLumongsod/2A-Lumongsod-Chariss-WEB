// login js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    function handleSubmit(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Add your login logic here (e.g., send data to a server, validate credentials)
        console.log(`Email: ${email}, Password: ${password}`);

        // Show an alert after handling the form
        alert('Login successful!');
    }

    loginForm.addEventListener('submit', handleSubmit);
});

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const registerLink = document.getElementById('registerLink');
    const loginLink = document.getElementById('loginLink');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginSubmitButton = document.querySelector("#loginForm button[type='submit']");

    // Open popup when login button is clicked
    loginButton.addEventListener('click', () => {
        popup.classList.remove('hidden'); // Show the popup
    });

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden'); // Hide the popup
    });

    // Close the popup when the 'Esc' key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popup.classList.add('hidden'); // Hide the popup if 'Esc' is pressed
        }
    });

    // Switch to Register form
    registerLink.addEventListener('click', () => {
        loginForm.style.display = 'none'; // Hide login form
        registerForm.style.display = 'block'; // Show register form
    });

    // Switch to Login form
    loginLink.addEventListener('click', () => {
        registerForm.style.display = 'none'; // Hide register form
        loginForm.style.display = 'block'; // Show login form
    });

    // Handle Login form submission (mock logic)
    loginSubmitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form from submitting to the server
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Mock validation - Replace with actual logic
        if (email === 'test@example.com' && password === 'password123') {
            alert('Login successful!');
            popup.classList.add('hidden'); // Hide the popup after successful login
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');

    // Add event listeners to the buttons
    signupBtn.addEventListener('click', function () {
        // Redirect the user to the signup page
        window.location.href = '/register.html'; // Replace with your signup page URL
    });

    loginBtn.addEventListener('click', function () {
        // Redirect the user to the login page
        window.location.href = '/login.html'; // Replace with your login page URL
    });
});

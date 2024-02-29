document.addEventListener('DOMContentLoaded', function () {
    const signupBtn = document.getElementById('signupBtn');
    const loginBtn = document.getElementById('loginBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');

    // Add event listeners to the buttons
    signupBtn.addEventListener('click', function () {
        // Redirect the user to the signup page
        window.location.href = '/register.html'; 
    });

    loginBtn.addEventListener('click', function () {
        // Redirect the user to the login page
        window.location.href = '/login.html'; 
    });
    getStartedBtn.addEventListener('click', function () {
        window.location.href ='/register.html'; 
    });
});

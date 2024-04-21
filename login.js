document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === '88' && password === '88') {
        document.getElementById('message').innerText = 'Login successful!';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password';
    }
});

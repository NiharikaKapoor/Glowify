// Toggle between Login and Sign Up forms
function toggleForms() {
    document.getElementById("login-box").classList.toggle("nope");
    document.getElementById("signup-box").classList.toggle("nope");
}

// Handle Sign Up
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Check if user already exists
    const existingUser = JSON.parse(localStorage.getItem(email));
    if (existingUser) {
        document.getElementById("signupError").textContent = "User already exists. Please login.";
        return;
    }

    // Save new user to localStorage
    const user = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem(email, JSON.stringify(user));

    // Show success message
    document.getElementById("signupError").textContent = "Sign up successful! Redirecting to homepage...";

    // Redirect to the main index page after a delay (e.g., 1 second)
    localStorage.setItem("currentUser", JSON.stringify(user));
    setTimeout(function () {
        window.location.href = "index.html";  // Redirect to main page
    }, 1000);

    // Clear the form
    document.getElementById("signupForm").reset();
});

// Handle Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Get user from localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (!storedUser) {
        document.getElementById("loginError").textContent = "User not found. Please sign up.";
        return;
    }

    if (storedUser.password === password) {
        document.getElementById("loginError").textContent = "Login successful!";
        
        // Redirect to the main index page after a delay 
        localStorage.setItem("currentUser", JSON.stringify(storedUser));
        setTimeout(function () {
            window.location.href = "index.html";  // Redirect to main page
        }, 1000);

    } else {
        document.getElementById("loginError").textContent = "Incorrect password. Please try again.";
    }

    // Clear the form
    document.getElementById("loginForm").reset();
});

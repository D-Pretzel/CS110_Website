document.addEventListener("DOMContentLoaded", function () {
    firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // Not logged in? Redirect to login
        window.location.href = "./index.html";
    } else {
        // Display user's email
        document.getElementById("profileEmail").textContent = user.email;
    }
    });
});
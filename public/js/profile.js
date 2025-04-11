// Logout function
document.addEventListener("DOMContentLoaded", function () {
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
    // Not logged in, redirect to login page
    window.location.href = "index.html";
    } else {
    // Display user info
    document.getElementById("profileName").textContent = user.displayName || "No name set";
    document.getElementById("profileEmail").textContent = user.email || "No email available";
    document.getElementById("profileUID").textContent = user.uid;
    document.getElementById("profileDateCreated").textContent = user.metadata.creationTime;
    }
});
});

function logout() {
    firebase.auth().signOut().then(() => {
    window.location.href = "./index.html";
    });
}
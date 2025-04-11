function login() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log("Login successful:", userCredential.user);
        window.location.href = "/home.html";
    })
    .catch((error) => {
        console.error("Login failed:", error);
        alert("Login Failed: " + error.message);
    });
}
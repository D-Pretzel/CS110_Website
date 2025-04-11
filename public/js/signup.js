window.signup = function () {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password || !fname || !lname) {
        alert("Please fill in all fields.");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Account created");
            return userCredential.user.updateProfile({
                displayName: `${fname} ${lname}`
            });
        })
        .then(() => {
            console.log("Profile updated");
            window.location.href = './home.html';
        })
        .catch((error) => {
            console.error("Signup failed:", error.code, error.message);
            alert("Error: " + error.message);
        });
}
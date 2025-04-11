function toggleMenu() {
    var navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("responsive");
}

// Load nav bar from external file and insert into the #navbar-container element
document.addEventListener("DOMContentLoaded", function () {
    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
        })
        .catch(error => {
            console.warn('Could not load nav bar:', error.response);
        });
});
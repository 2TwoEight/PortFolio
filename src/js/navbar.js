document.addEventListener("DOMContentLoaded", function() {
    fetch('./src/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
});
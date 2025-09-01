// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Simple color-changing animation loop on the header
const header = document.getElementById("main-header");
const colors = ["#ff4e50", "#1e90ff", "#42e695", "#f9d423", "#fcb045"];
let index = 0;

function animateHeader() {
    header.style.transition = "background-color 1.5s ease";
    header.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
    setTimeout(animateHeader, 2000); // loop every 2 seconds
}

window.onload = animateHeader;

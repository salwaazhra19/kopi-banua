const tombol = document.querySelector(".tombol-menu");
const menu   = document.querySelector("nav ul");

tombol.addEventListener("click", function () {
    menu.classList.toggle("tampil");
});

const form = document.querySelector("#pesan form");

form.addEventListener("submit", function (e) {
    const wa = document.querySelector("#wa").value.trim();
    
    if (wa.length < 10) {
        e.preventDefault();
        alert("Nomor WhatsApp minimal 10 digit.");
    }
});

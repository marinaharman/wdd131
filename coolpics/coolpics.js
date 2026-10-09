let dialog = document.querySelector("dialog");
let box = document.querySelector("#image-box");
let dialogImage = dialog.querySelector("img");
const closeButton = dialog.querySelector(".close-viewer");

box.addEventListener("click", function(event) {
    console.log(event.target.src);
    dialogImage.src = event.target.src.replace("-sm", "-full");
    dialogImage.alt = event.target.alt;
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

const menuButton = document.querySelector("#menu");
const navLinks = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
    navLinks.forEach((link) => {
        link.classList.toggle("show");
    });
});
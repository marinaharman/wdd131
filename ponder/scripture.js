// grab the menu button HTML button and save to a variable
let menuButton = document.querySelector(".menu-btn");

// add event listener to menuButton
// anonymous or nameless function
menuButton.addEventListener("click", function (e) {
    // grab a reference to the nav
    let nav = document.querySelector("nav");

    // console.log(nav.style)

    // toggle menu styles when clicked
    // menuButton.classList.toggle("active");

    // if(nav.style.display === "") {
    //     nav.style.display = "flex";
    //     console.log("I am in the if statement")
    // } else {
    //     nav.style.display = "";
    // }

    // toggle menu styles when clicked
    // ternary operator
    nav.style.display = nav.style.display === "" ? "flex": "";

    menuButton.classList.toggle("change");
});
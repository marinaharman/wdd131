// how to manipulate the DOM with javascript

// grab our h1 from the page
let heading = document.querySelector("h1");

console.log(heading);

// change the text of the element
heading.textContent = "Changed the heading to something else";

// change the text color
heading.style.color = "#0000FF";

// pick your own style and change it
heading.style.backgroundColor = "#333333";
heading.style.borderRadius = "10px";
heading.style.fontStyle = "italic";

// retrieve an ID element from the page
document.getElementById("topics").style.color = "red";
// same thing
document.querySelector("#topics").style.color = "red";

// select the img tag
let image = document.querySelector("img");

console.log(image.getAttribute("src"));

image.setAttribute("src", "220325case013.jpg");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                
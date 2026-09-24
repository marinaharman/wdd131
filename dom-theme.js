// 1. functions
myFunctionName("DAN");

function myFunctionName(name) {
    console.log("Your name is " + name);
    let lastName = "Warner"
}
// this will break! outer scope reference!
// console.log(lastName)

// call (invoke) the function
myFunctionName("Brother Warner");
myFunctionName("James");

// 2. event listeners
    // retrieve something from the DOM
    let select = document.querySelector("#theme-select");
    // register an event listener
    // event we are listening for, the function to call when that event occurs
    select.addEventListener("change", handleEvent);

    function handleEvent(event) {
        console.log(event);
        console.log(event.target.value);
    }
// 3. if statements






let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          
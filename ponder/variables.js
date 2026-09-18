

// declare a variable
let age = 23;

// like print in python
console.log(age);

age = 26;

// a constant variable
const name = "Brother Warner";

// this shouldn't work...
// name = "Dr Java";

const policyDisclaimer = "Just because you give us money, doesn't mean we have to give it back to you";
const username = "billybob";

// scope = where you can reference a variable by name
if(age == 26) {
    // a new scope
    console.log(username);
    const favoriteColor = "blue;"
    let name = "Dr Java";
    console.log(name);
}

console.log(name);

let favoriteColor = "blue";
// the console will not see this because it was defined in the scope
console.log(favoriteColor);

// grab our h1 from the DOM and color it blue with css
document.querySelector("h1").style.color = favoriteColor;
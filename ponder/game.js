// 1. Add event listener to the button
document.querySelector('#rollButton').addEventListener("click", event => {
    // animate the die
        // switch the src to the die_rolling_gif animation
    const images = document.querySelectorAll('#gameboard img')
    images.forEach(image => {

        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    // change the value each die lands on randomly
        // changing the src image

    setTimeout(() => {
        // run what is in here after x milliseconds


    images.forEach(image => {
        if(isDieUnlocked(image)) {
        // Math.random() returns a random number between 0-1
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        image.src = `assets/white_dice_${randomNumber}.gif`;
        }
    });
    }, 700);
});

function isDieUnlocked(dieImage) {
    // is the corresponding checkbox check? return false
    const checkboxes = document.querySelectorAll('#gameboard input');
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    return unchecked.find(unchecked = unchecked.className === dieImage.className)
}
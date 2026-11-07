const attackStat = document.querySelector("#attack");
const levelUp = document.querySelector("#level-up");
const healthStat = document.querySelector("#health");
const levelStat = document.querySelector("#level")

let character = {
    health: 100,
    attacked() {
        this.health -= 20;
        healthStat.textContent = `Health: ${this.health}`

        if(this.health == 0)
            setTimeout(() => alert("rip"), 10);
    },
    level: 5,
    levelUp() {
        this.level += 1;
        levelStat.textContent = `Level: ${this.level}`
    } 
};

attackStat.addEventListener("click", () => {
    character.attacked();
});

levelUp.addEventListener("click", () => {
    character.levelUp();
});
class VirtualPet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.fun = 100;
        this.hunger = 100;
        this.energy = 100;
    }

    eatFood() {
        if (this.hunger < 90) {
            this.hunger += 10;
        } else {
            this.hunger = 100;
        }
    }

    sleep() {
        if (this.energy < 90) {
            this.energy +=10;
        } else {
            this.energy = 100;
        }
    }

    playTime() {
        if (this.fun < 90) {
            this.fun += 10;
        } else {
            this.fun = 100;
            console.log(`${name} has had enough playtime.`)
        }
    }
}

const eatButton = document.querySelector(".feed-button")
const sleepButton = document.querySelector(".sleep-button")
const playButton = document.querySelector(".play-button")

eatButton.addEventListener("click", VirtualPet.eatFood);
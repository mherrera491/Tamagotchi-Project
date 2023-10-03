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
      alert(`${this.name} is full!`)
    }
  }

  sleep() {
    if (this.energy < 90) {
      this.energy += 10;
    } else {
      this.energy = 100;
      alert(`${this.name} is not sleepy!`)
    }
  }

  playTime() {
    if (this.fun < 90) {
      this.fun += 10;
    } else {
      this.fun = 100;
      alert(`${this.name} has had enough playtime.`);
    }
  }

  increaseAge() {
    this.age +=1;
    const ageDisplay = document.getElementById("age");
    ageDisplay.textContent = this.age;
}
}

// Creating the prompt for the name
const petName = prompt("What is your virtual pet's name?");

// creating a new instance of the VirtualPet class using the name given from the prompt
const myPet = new VirtualPet(petName);

// console.log(myPet)

let newName = document.getElementById("pet-name")
newName.innerHTML = `${petName} says hi!`

// Created function that calls the increaseAge() function after a certain amount of time
function ageIncreaseTimer() {
    setInterval(function () {
        myPet.increaseAge()
    }, 3000);
}
ageIncreaseTimer();

const eatButton = document.querySelector("#feed-button");
const sleepButton = document.querySelector("#sleep-button");
const playButton = document.querySelector("#play-button");

eatButton.addEventListener("click", function() {
    myPet.eatFood();
})
sleepButton.addEventListener("click", function() {
    myPet.sleep();
})
playButton.addEventListener("click", function() {
    myPet.playTime();
})




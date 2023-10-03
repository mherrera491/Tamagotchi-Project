class VirtualPet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.fun = 100;
    this.hunger = 100;
    this.energy = 100;
    this.isAlive = true;
  }

  eatFood() {
    if (this.hunger <= 90) {
      this.hunger += 10;
      const hungerDisplay = document.getElementById("hunger");
      hungerDisplay.textContent = `${this.hunger}%`;
    } else {
      this.hunger > 90;
      alert(`${this.name} is full!`);
    }
  }

  sleep() {
    if (this.energy <= 90) {
      this.energy += 10;
      const sleepDisplay = document.getElementById("sleep");
      sleepDisplay.textContent = `${this.sleep}%`;
    } else {
      this.energy > 90;
      alert(`${this.name} is not sleepy!`);
    }
  }

  playTime() {
    if (this.fun <= 90) {
      this.fun += 10;
      const funDisplay = document.getElementById("fun");
      funDisplay.textContent = `${this.fun}%`;
    } else {
      this.fun > 90;
      alert(`${this.name} has had enough playtime.`);
    }
  }
}

// Creating the prompt for the name
const petName = prompt("What is your virtual pet's name?");

// The following function resets the game once the pet dies
function resetGame(pet) {
  pet.age = 0;
  pet.fun = 100;
  pet.hunger = 100;
  pet.energy = 100;
  pet.isAlive = true;

  alert("Game has reset!");
  const ageDisplay = document.getElementById("age");
  ageDisplay.textContent = `${pet.age}`;
  const funDisplay = document.getElementById("fun");
  funDisplay.textContent = `${pet.fun}%`;
  const hungerDisplay = document.getElementById("hunger");
  hungerDisplay.textContent = `${pet.hunger}%`;
  const energyDisplay = document.getElementById("energy");
  energyDisplay.textContent = `${pet.energy}%`;

}

// The following 4 functions age up and decrease teh hunger, energy, and fun of the pet
function increaseAge(pet) {
  if (pet.age < 50) {
    pet.age += 5;
    const ageDisplay = document.getElementById("age");
    ageDisplay.textContent = pet.age;
  } else {
    pet.isAlive = false;
    alert(`${pet.name} has died of old age :(`);
    resetGame(pet);
  }
}
function decreaseFun(pet) {
  if (pet.fun > 0) {
    pet.fun -= 10;
    const funDisplay = document.getElementById("fun");
    funDisplay.textContent = `${pet.fun}%`;
  } else {
    pet.isAlive = false;
    alert(`${pet.name} has died of boredom :(`);
    resetGame(pet);
  }
}
function decreaseHunger(pet) {
  if (pet.hunger > 0) {
    pet.hunger -= 10;
    const hungerDisplay = document.getElementById("hunger");
    hungerDisplay.textContent = `${pet.hunger}%`;
  } else {
    pet.isAlive = false;
    alert(`${pet.name} has died of hunger :(`);
    resetGame(pet);
  }
}
function decreaseEnergy(pet) {
  if (pet.energy > 0) {
    pet.energy -= 10;
    const energyDisplay = document.getElementById("energy");
    energyDisplay.textContent = `${pet.energy}%`;
  } else {
    pet.isAlive = false;
    alert(`${pet.name} did not get enough sleep and has died :(`);
    resetGame(pet);
  }
}



// creating a new instance of the VirtualPet class using the name given from the prompt
const myPet = new VirtualPet(petName);

// console.log(myPet)

let newName = document.getElementById("pet-name");
newName.innerHTML = `${petName} says hi!`;

// Created function that calls the increaseAge() function after a certain amount of time
function ageIncreaseTimer() {
  setInterval(function () {
    increaseAge(myPet);
  }, 15000);
}
ageIncreaseTimer();

// Created function that calls the decreaseFun() function after a certain amount of time
function decreaseFunTimer() {
  setInterval(function () {
    decreaseFun(myPet);
  }, 5000);
}
decreaseFunTimer();

// Created function that calls the decreaseHunger() function after a certain amount of time
function decreaseHungerTimer() {
  setInterval(function () {
    decreaseHunger(myPet);
  }, 3000);
}
decreaseHungerTimer();

// Created function that calls the decreaseEnergy() function after a certain amount of time passes
function decreaseEnergyTimer() {
  setInterval(function () {
    decreaseEnergy(myPet);
  }, 4000);
}
decreaseEnergyTimer();

const eatButton = document.querySelector("#feed-button");
const sleepButton = document.querySelector("#sleep-button");
const playButton = document.querySelector("#play-button");

eatButton.addEventListener("click", function () {
  myPet.eatFood();
});
sleepButton.addEventListener("click", function () {
  myPet.sleep();
});
playButton.addEventListener("click", function () {
  myPet.playTime();
});

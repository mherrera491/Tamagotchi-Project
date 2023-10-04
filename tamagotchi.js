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
      // console.log("Energy updated: ", this.energy);
      const sleepDisplay = document.getElementById("energy");
      sleepDisplay.textContent = `${this.energy}%`;
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

// wrapped the game logic in a startGame function this will be used for resetting the game once the pet dies
function startGame() {
  // Creating the prompt for the name
  const petName = prompt("What is your virtual pet's name?");

  // The following function resets the game once the pet dies
  function resetGame(pet) {
    pet.age = 0;
    pet.fun = 100;
    pet.hunger = 100;
    pet.energy = 100;
    pet.isAlive = true;

    const ageDisplay = document.getElementById("age");
    ageDisplay.textContent = pet.age;
    const funDisplay = document.getElementById("fun");
    funDisplay.textContent = `${pet.fun}%`;
    const hungerDisplay = document.getElementById("hunger");
    hungerDisplay.textContent = `${pet.hunger}%`;
    const energyDisplay = document.getElementById("energy");
    energyDisplay.textContent = `${pet.energy}%`;

    alert("Game has reset!");
  }

  function resetAndAskForName(pet) {
    resetGame(pet);
    startGame();
  }

  // Following function updates the pet's avatar as it ages up and gives an alert each time it does
  function updatePetImage(pet) {
    const petImage = document.getElementById("pet-avatar");
    if (pet.age < 5) {
      petImage.src = "./assets/images/baby2-stage.png";
    } else if (pet.age < 13) {
      petImage.src = "./assets/images/child2-stage.png";
      // alert(`${pet.name} has reached childhood!`);
    } else if (pet.age < 20) {
      petImage.src = "./assets/images/teenager2-stage.png";
      // alert(`${pet.name} is now a teenager!`);
    } else {
      petImage.src = "./assets/images/adult2-stage.png";
      // alert(`${pet.name} has reached adulthood!`);
    }
  }

  // The following 4 functions age up and decrease the hunger, energy, and fun of the pet. They will reset if the pet gets too old or the hunger, fun, and energy levels reach 10
  function increaseAge(pet) {
    if (pet.age < 50) {
      pet.age += 1;
      const ageDisplay = document.getElementById("age");
      ageDisplay.textContent = pet.age;
      updatePetImage(pet);
    } else {
      pet.isAlive = false;
      alert(`${pet.name} has died of old age :(`);
      resetAndAskForName(pet);
    }
  }
  function decreaseFun(pet) {
    if (pet.fun > 10) {
      pet.fun -= 10;
      const funDisplay = document.getElementById("fun");
      funDisplay.textContent = `${pet.fun}%`;
    } else {
      pet.isAlive = false;
      alert(`${pet.name} has died of boredom :(`);
      resetAndAskForName(pet);
    }
  }
  function decreaseHunger(pet) {
    if (pet.hunger > 10) {
      pet.hunger -= 10;
      const hungerDisplay = document.getElementById("hunger");
      hungerDisplay.textContent = `${pet.hunger}%`;
    } else {
      pet.isAlive = false;
      alert(`${pet.name} has died of hunger :(`);
      resetAndAskForName(pet);
    }
  }
  function decreaseEnergy(pet) {
    if (pet.energy > 10) {
      pet.energy -= 10;
      const energyDisplay = document.getElementById("energy");
      energyDisplay.textContent = `${pet.energy}%`;
    } else {
      pet.isAlive = false;
      alert(`${pet.name} did not get enough sleep and has died :(`);
      resetAndAskForName(pet);
    }
  }

  // creating a new instance of the VirtualPet class using the name given from the prompt
  const myPet = new VirtualPet(petName);

  // console.log(myPet)

  let newName = document.getElementById("pet-name");
  newName.innerHTML = `${petName}`;

  // Created function that calls the increaseAge() function after a certain amount of time
  function ageIncreaseTimer() {
    setInterval(function () {
      increaseAge(myPet);
    }, 2000);
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

  // added event listeners to buttons
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
}
startGame();

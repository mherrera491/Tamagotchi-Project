class VirtualPet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.fun = 100;
    this.hunger = 100;
    this.energy = 100;
    this.isAlive = true;
  }

  // Following methods are for eating, sleeping, and playing
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

  updatePetImage() {
    const petImage = document.getElementById("pet-avatar");
    if (this.age < 5) {
      petImage.src = "./assets/images/baby2-stage.png";
    } else if (this.age < 13) {
      petImage.src = "./assets/images/child2-stage.png";
    } else if (this.age < 20) {
      petImage.src = "./assets/images/teenager2-stage.png";
    } else {
      petImage.src = "./assets/images/adult2-stage.png";
    }
  }

  // The following 4 functions age up and decrease the hunger, energy, and fun of the pet. They will reset if the pet gets too old or the hunger, fun, and energy levels reach 10
  increaseAge() {
    if (this.age < 50) {
      this.age += 1;
      const ageDisplay = document.getElementById("age");
      ageDisplay.textContent = this.age;
      this.updatePetImage();
    } else {
      this.isAlive = false;
      alert(`${this.name} has died of old age :(`);
      this.reset();
    }
  }
  decreaseFun() {
    if (this.fun > 10) {
      this.fun -= 10;
      const funDisplay = document.getElementById("fun");
      funDisplay.textContent = `${this.fun}%`;
    } else {
      this.isAlive = false;
      alert(`${this.name} has died of boredom :(`);
      this.reset();
    }
  }
  decreaseHunger() {
    if (this.hunger > 10) {
      this.hunger -= 10;
      const hungerDisplay = document.getElementById("hunger");
      hungerDisplay.textContent = `${this.hunger}%`;
    } else {
      this.isAlive = false;
      alert(`${this.name} has died of hunger :(`);
      this.reset();
    }
  }
  decreaseEnergy() {
    if (this.energy > 10) {
      this.energy -= 10;
      const energyDisplay = document.getElementById("energy");
      energyDisplay.textContent = `${this.energy}%`;
    } else {
      this.isAlive = false;
      alert(`${this.name} did not get enough sleep and has died :(`);
      this.reset();
    }
  }

  reset() {
    // Resetting all pet properties and updating display
    this.age = 0;
    this.fun = 100;
    this.hunger = 100;
    this.energy = 100;
    this.isAlive = true;

    const ageDisplay = document.getElementById("age");
    ageDisplay.textContent = this.age;
    const funDisplay = document.getElementById("fun");
    funDisplay.textContent = `${this.fun}%`;
    const hungerDisplay = document.getElementById("hunger");
    hungerDisplay.textContent = `${this.hunger}%`;
    const energyDisplay = document.getElementById("energy");
    energyDisplay.textContent = `${this.energy}%`;

    // Clearing the existing timers using clearInterval to ensure timers reset when the game restarts
    clearInterval(ageTimer);
    clearInterval(funTimer);
    clearInterval(hungerTimer);
    clearInterval(energyTimer);

    alert("Game has reset!");
    startGame();
  }
}

// Declaring variables to store time interval IDs
let ageTimer, funTimer, hungerTimer, energyTimer;
// declaring myPet as a global variable for later functions
let myPet;

// wrapped the game logic in a startGame function this will be used for resetting the game once the pet dies
function startGame() {
  // Creating the prompt for the name
  const petName = prompt("What is your virtual pet's name?");

  // creating a new instance of the VirtualPet class using the name given from the prompt
  myPet = new VirtualPet(petName);
  // console.log(myPet)

  // Updates the pet's name in the HTML
  const newName = document.getElementById("pet-name");
  newName.innerHTML = `${petName}`;

  // Created function that calls the increaseAge() function after a certain amount of time
  function ageIncreaseTimer() {
    ageTimer = setInterval(function () {
      myPet.increaseAge();
    }, 2000);
  }
  ageIncreaseTimer();

  // Created function that calls the decreaseFun() function after a certain amount of time
  function decreaseFunTimer() {
    funTimer = setInterval(function () {
      myPet.decreaseFun();
    }, 5000);
  }
  decreaseFunTimer();

  // Created function that calls the decreaseHunger() function after a certain amount of time
  function decreaseHungerTimer() {
    hungerTimer = setInterval(function () {
      myPet.decreaseHunger();
    }, 3000);
  }
  decreaseHungerTimer();

  // Created function that calls the decreaseEnergy() function after a certain amount of time passes
  function decreaseEnergyTimer() {
    energyTimer = setInterval(function () {
      myPet.decreaseEnergy();
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

  // Sleep button invokes the sleep() function and also changes the background image to a night scene for 2 seconds using the setTimeout function which is used to call a function after a certain amount of time
  sleepButton.addEventListener("click", function () {
    myPet.sleep();
    const body = document.getElementById("main-body");
    body.style.backgroundImage =
      'url("./assets/images/tamagotchi-background-night.png")';
    setTimeout(function () {
      body.style.backgroundImage =
        'url("./assets/images/tamagotchi-background-day.png")';
    }, 3000);
  });

  playButton.addEventListener("click", function () {
    myPet.playTime();
  });
}
startGame();

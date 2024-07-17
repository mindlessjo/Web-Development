const buttonsA = document.querySelectorAll("#pingA1, #pingA2, #pingA3"); // Get all group A button elements
const buttonsB = document.querySelectorAll("#pingB1, #pingB2, #pingB3"); // Get all group B button elements

function setAriaSelected(selectedButton, buttonsGroup) {
  buttonsGroup.forEach((button) => {
    if (button === selectedButton) {
      button.setAttribute("aria-selected", "true");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-selected", "false");
      button.setAttribute("aria-pressed", "false");
    }
  });
}

// Event listeners for group A buttons
buttonsA.forEach((button) => {
  button.addEventListener("click", function () {
    setAriaSelected(this, buttonsA);
  });
});

// Event listeners for group B buttons
buttonsB.forEach((button) => {
  button.addEventListener("click", function () {
    setAriaSelected(this, buttonsB);
  });
});

// CPU choice logic
function cpuchoice(max) {
  return Math.floor(Math.random() * max) + 1;
}

var cpuresult = cpuchoice(3);
console.log(cpuresult);

const choice1a = document.getElementById("pingA1");
const choice2a = document.getElementById("pingA2");
const choice3a = document.getElementById("pingA3");

if (cpuresult === 1) {
  setAriaSelected(choice1a, buttonsA);
} else if (cpuresult === 2) {
  setAriaSelected(choice2a, buttonsA);
} else if (cpuresult === 3) {
  setAriaSelected(choice3a, buttonsA);
}

//player choice logic

function playerchoice(max) {
  return Math.floor(Math.random() * max) + 1;
}

const choice1b = document.getElementById("pingB1");
const choice2b = document.getElementById("pingB2");
const choice3b = document.getElementById("pingB3");

function playero1() {
  if ((AriaSelected = "true")) {
    playeranswer = 1;
    return playeranswer;
  }
}

function playero2() {
  if ((AriaSelected = "true")) {
    playeranswer = 2;
    return playeranswer;
  }
}

function playero3() {
  if ((AriaSelected = "true")) {
    playeranswer = 3;
    return playeranswer;
  }
}

// Score Handlers

function submitanswer() {
  const opponentscoreElement = document.getElementById("opponent-score");
  const playerscoreElement = document.getElementById("player-score");

  // Parse the current scores as integers
  let opponentscore = parseInt(opponentscoreElement.innerText, 10);
  let playerscore = parseInt(playerscoreElement.innerText, 10);

  let cpuSelectedButton;
  if (cpuresult === 1) {
    cpuSelectedButton = choice1a;
  } else if (cpuresult === 2) {
    cpuSelectedButton = choice2a;
  } else if (cpuresult === 3) {
    cpuSelectedButton = choice3a;
  }

  let playerSelectedButton;
  if (playeranswer === 1) {
    playerSelectedButton = choice1b;
  } else if (playeranswer === 2) {
    playerSelectedButton = choice2b;
  } else if (playeranswer === 3) {
    playerSelectedButton = choice3b;
  }

  if (cpuresult == playeranswer) {
    playerscore += 1;
    console.log("YOU WERE CORRECT! HOORAY");

    cpuSelectedButton.style.backgroundColor = "red";
    playerSelectedButton.style.pointerEvents = "none";
  } else {
    console.log("INCORRECT!");
    opponentscore += 1;
    buttonsB.forEach((button) => {
      button.style.pointerEvents = "none";
      button.style.backgroundColor = "red";
    });
  }

  // Update the scores in the HTML
  opponentscoreElement.innerText = opponentscore;
  playerscoreElement.innerText = playerscore;
}

// Restart
function restart() {
  buttonsA.forEach((button) => {
    button.setAttribute("aria-selected", "false");
    button.setAttribute("aria-pressed", "false");
    button.style.backgroundColor = "";
    button.style.pointerEvents = "auto";
  });
  buttonsB.forEach((button) => {
    button.setAttribute("aria-selected", "false");
    button.setAttribute("aria-pressed", "false");
    button.style.backgroundColor = "";
    button.style.pointerEvents = "auto";
  });

  cpuresult = cpuchoice(3);
  console.log(cpuresult);

  if (cpuresult === 1) {
    setAriaSelected(choice1a, buttonsA);
  } else if (cpuresult === 2) {
    setAriaSelected(choice2a, buttonsA);
  } else if (cpuresult === 3) {
    setAriaSelected(choice3a, buttonsA);
  }
}

// Add a button to trigger the restart function
const restartButton = document.getElementById("restart-button");
if (restartButton) {
  restartButton.addEventListener("click", restart);
}
//////
// function toggleButton(id) {
//   var button = document.getElementById(id);
//   var pressed = button.getAttribute("aria-pressed") === "true";
//   button.setAttribute("aria-pressed", !pressed);
// }

// // Toggle buttons for group A
// function toggleButton1a() {
//   toggleButton("pingA1");
// }

// function toggleButton2a() {
//   toggleButton("pingA2");
// }

// function toggleButton3a() {
//   toggleButton("pingA3");
// }

// // Toggle buttons for group B
// function toggleButton1b() {
//   toggleButton("pingB1");
// }

// function toggleButton2b() {
//   toggleButton("pingB2");
// }

// function toggleButton3b() {
//   toggleButton("pingB3");
// }

// // butoon selector

// // CPU choice logic
// const choice1a = document.getElementById("pingA1");
// const choice2a = document.getElementById("pingA2");
// const choice3a = document.getElementById("pingA3");
// const choice1b = document.getElementById("pingB1");
// const choice2b = document.getElementById("pingB2");
// const choice3b = document.getElementById("pingB3");
// choicelist = [choice1a, choice2a, choice3a, choice1b, choice2b, choice3b];
// console.log(choicelist);

// const cpuresult = cpuchoice(3);
// console.log(cpuresult);
// function cpuchoice(max) {
//   return Math.floor(Math.random() * max + 1);
// }

// // CPU result manager
// if (cpuresult === 1) {
//   choice1a.setAttribute("aria-pressed", "true");
// } else if (cpuresult === 2) {
//   choice2a.setAttribute("aria-pressed", "true");
// } else if (cpuresult === 3) {
//   choice3a.setAttribute("aria-pressed", "true");
// }

// // Score Handlers

// const opponentscore = document.getElementById("opponent-score");
// const playerscore = document.getElementById("player-score");

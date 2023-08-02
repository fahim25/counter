// const countdownButton = document.getElementById("countdownButton");
// let countdown = sessionStorage.getItem("countdown") || 30;
// let isDisabled = JSON.parse(sessionStorage.getItem("isDisabled")) || false;
// let clickCount = JSON.parse(sessionStorage.getItem("clickCount")) || 0;

// function startCountdown() {
//   if (countdown > 0) {
//     countdownButton.innerText = `Wait (${countdown}s)`;
//     countdown--;
//     setTimeout(startCountdown, 1000);
//   } else {
//     countdownButton.innerText = "Click Me";
//     if (!isDisabled) {
//       countdownButton.removeAttribute("disabled");
//     }
//   }
// }

// function handleButtonClick() {
//   if (!isDisabled) {
//     countdownButton.setAttribute("disabled", "true");
//     isDisabled = true;
//     clickCount++;
//     sessionStorage.setItem("clickCount", JSON.stringify(clickCount));
//     sessionStorage.setItem("isDisabled", JSON.stringify(isDisabled));
//   }
// }

// // Save countdown value in sessionStorage every second
// setInterval(() => {
//   sessionStorage.setItem("countdown", countdown);
// }, 1000);

// // Initialize button state based on isDisabled
// if (isDisabled) {
//   countdownButton.setAttribute("disabled", "true");
// }

// startCountdown();

// const countdownButton = document.getElementById("countdownButton");
// let countdown = sessionStorage.getItem("countdown") || 30;
// let isDisabled = JSON.parse(sessionStorage.getItem("isDisabled")) || false;
// let clickCount = JSON.parse(sessionStorage.getItem("clickCount")) || 0;

// function startCountdown() {
//   if (countdown > 0) {
//     countdownButton.innerText = `Wait (${countdown}s)`;
//     countdown--;
//     setTimeout(startCountdown, 1000);
//   } else {
//     countdownButton.innerText = "Click Me";
//     if (!isDisabled) {
//       countdownButton.removeAttribute("disabled");
//     }
//   }
// }

// function handleButtonClick() {
//   if (!isDisabled) {
//     countdownButton.setAttribute("disabled", "true");
//     isDisabled = true;
//     clickCount++;
//     sessionStorage.setItem("clickCount", JSON.stringify(clickCount));
//     sessionStorage.setItem("isDisabled", JSON.stringify(isDisabled));
//   }
// }

// // Save countdown value in sessionStorage every second
// setInterval(() => {
//   sessionStorage.setItem("countdown", countdown);
// }, 1000);

// // Initialize button state based on isDisabled
// if (isDisabled) {
//   countdownButton.setAttribute("disabled", "true");
// }

// startCountdown();

const countdownButton = document.getElementById("countdownButton");
let countdown = sessionStorage.getItem("countdown") || 30;
let isDisabled = JSON.parse(sessionStorage.getItem("isDisabled")) || false;
let clickCount = JSON.parse(sessionStorage.getItem("clickCount")) || 0;
let clickCounter = 0; // To track button clicks

function startCountdown() {
  if (countdown > 0 && clickCounter < 2) {
    countdownButton.innerText = `Wait (${countdown}s)`;
    countdown--;
    setTimeout(startCountdown, 1000);
  } else {
    if (clickCounter < 2) {
      countdownButton.innerText = "Click Me";
      countdownButton.removeAttribute("disabled");
      isDisabled = false;
      sessionStorage.setItem("isDisabled", JSON.stringify(isDisabled));
    } else {
      countdownButton.innerText = "Process Completed";
      countdownButton.setAttribute("disabled", "true");
      isDisabled = true;
      sessionStorage.setItem("isDisabled", JSON.stringify(isDisabled));
    }
  }
}

function handleButtonClick() {
  if (!isDisabled) {
    clickCounter++;
    if (clickCounter === 2) {
      countdownButton.setAttribute("disabled", "true");
      isDisabled = true;
      sessionStorage.setItem("isDisabled", JSON.stringify(isDisabled));
    }
    countdownButton.setAttribute("disabled", "true");
    countdown = 30;
    sessionStorage.setItem("countdown", countdown);
    startCountdown();
  }
}

// Save countdown value in sessionStorage every second
setInterval(() => {
  sessionStorage.setItem("countdown", countdown);
}, 1000);

// Initialize button state based on isDisabled
if (isDisabled && clickCounter === 2) {
  countdownButton.innerText = "Process Completed";
  countdownButton.setAttribute("disabled", "true");
} else if (isDisabled) {
  countdownButton.setAttribute("disabled", "true");
} else {
  startCountdown();
}

// Constants and variables
const TIMER_HOURS = $("#timer-hours")[0];
const TIMER_MINS = $("#timer-mins")[0];
const TIMER_SECS = $("#timer-secs")[0];
const TIMER_TIME = $("#timer-time");
let hours,
  mins,
  secs = 0;
let interval;
let isRunning = false;

// Functions
// Start the timer
$("#timer-start").click(() => {
  if (!isRunning) {
    isRunning = true;
    validateTime();
    hours = TIMER_HOURS.value;
    mins = TIMER_MINS.value;
    secs = TIMER_SECS.value;
    updateScreen();
    secs = setSecs(secs);
    interval = setInterval(() => {
      updateScreen();
      secs = setSecs(secs);
    }, 1000);
  }
  TIMER_HOURS.value = "";
  TIMER_MINS.value = "";
  TIMER_SECS.value = "";
});

// Stops the timer
$("#timer-reset").click(() => {
  stopTimer(null);
});

// Sets seconds
function setSecs(secs) {
  if (secs - 1 == -1) {
    secs = 59;
    setMins();
  } else secs--;
  return secs;
}

// Sets minutes
function setMins() {
  if (mins - 1 == -1) {
    mins = 59;
    setHours();
  } else mins--;
}

// Sets hours
function setHours() {
  if (hours - 1 == -1) {
    stopTimer("end");
  } else hours--;
}

// Validates input time
function validateTime() {
  if (TIMER_MINS.value > 60) TIMER_MINS.value = 59;
  if (TIMER_SECS.value > 60) TIMER_SECS.value = 59;

  if (TIMER_HOURS.value == "") TIMER_HOURS.value = 0;
  if (TIMER_MINS.value == "") TIMER_MINS.value = 0;
  if (TIMER_SECS.value == "") TIMER_SECS.value = 1;
}

// Stops and resets the timer
function stopTimer(arg) {
  clearInterval(interval);
  isRunning = false;
  hours = 0;
  mins = 0;
  secs = 0;
  TIMER_TIME.html("00:00:00");
  if (arg == "end") {
    setTimeout(() => {
      alert("TEMPORIZADOR ACABOU");
    }, 10);
  }
}

// Updates the timer screen with values based on conditions
function updateScreen() {
  if (hours < 10) {
    if (mins < 10) {
      if (secs < 10) TIMER_TIME.html(`0${hours}:0${mins}:0${secs}`);
      else TIMER_TIME.html(`0${hours}:0${mins}:${secs}`);
    } else {
      if (secs < 10) TIMER_TIME.html(`0${hours}:${mins}:0${secs}`);
      else TIMER_TIME.html(`0${hours}:${mins}:${secs}`);
    }
  } else {
    if (mins < 10) {
      if (secs < 10) TIMER_TIME.html(`${hours}:0${mins}:0${secs}`);
      else TIMER_TIME.html(`${hours}:0${mins}:${secs}`);
    } else {
      if (secs < 10) TIMER_TIME.html(`${hours}:${mins}:0${secs}`);
      else TIMER_TIME.html(`${hours}:${mins}:${secs}`);
    }
  }
}

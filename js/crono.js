// Constants and variables
const CRONO_TIME = $("#crono-time");
const CRONO_LAPS = $("#crono-laps");
let mins = 0,
  secs = 0,
  mills = 0;
const MILLS_SEC = 10;
let interval;
let isRunning = false;
let laps = 0;

// Functions
// Start the cronometer
$("#crono-start").click(() => {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      mills = setMills(mills);
      updateScreen();
    }, MILLS_SEC);
  }
});

// Sets milliseconds
function setMills(mills) {
  if (mills + MILLS_SEC >= 1000) {
    mills = 0;
    setSecs();
  } else mills += MILLS_SEC;
  return mills;
}

// Sets seconds
function setSecs() {
  if (secs + 1 >= 60) {
    secs = 0;
    setMins();
  } else secs += 1;
}

// Sets minutes
function setMins() {
  mins += 1;
}

// Updates the screen
function updateScreen() {
  if (secs < 10) {
    if (mills < 10) CRONO_TIME.html(`${mins}:0${secs}:000${mills}`);
    else if (mills < 100) CRONO_TIME.html(`${mins}:0${secs}:00${mills}`);
    else CRONO_TIME.html(`${mins}:0${secs}:0${mills}`);
  } else {
    if (mills < 10) CRONO_TIME.html(`${mins}:${secs}:000${mills}`);
    else if (mills < 100) CRONO_TIME.html(`${mins}:${secs}:00${mills}`);
    else CRONO_TIME.html(`${mins}:${secs}:0${mills}`);
  }
}

// Stops and resets the cronometer
$("#crono-reset").click(() => {
  clearInterval(interval);
  isRunning = false;
  laps = 0;
  mins = 0;
  secs = 0;
  mills = 0;
  CRONO_TIME.html(`0:00:0000`);
  CRONO_LAPS.html(`<div class="d-flcenter">Contador de Laps</div>`);
});

// Registers a lap
$("#crono-lap").click(() => {
  CRONO_LAPS[0].innerHTML += `<p>Lap ${laps + 1}: ${mins} mins, ${secs} secs, ${mills} msecs</p>`;
  laps++;
});

// Constants and variables
const PASS_LCHARSET = "abcdefghijklmopqrstuvwxyz";
const PASS_UCHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const PASS_NCHARSET = "0123456789";
const PASS_SCHARSET = "!@#$%^&*()";
const PASS_ARRAY_CHARSETS = [PASS_LCHARSET, PASS_UCHARSET, PASS_NCHARSET, PASS_SCHARSET];
const PASS_RESULTS = $("#pass-results");
const PASS_COPY = $("#pass-copy");

// Functions
// Generates the password
$("#pass-generate").click(() => {
  let pass = "";
  let size = passSize();
  for (i = 0; i < size; i++) {
    let chosenArr = Math.floor(Math.random() * PASS_ARRAY_CHARSETS.length);
    let chosenchar = Math.floor(Math.random() * PASS_ARRAY_CHARSETS[chosenArr].length);
    pass += PASS_ARRAY_CHARSETS[chosenArr].charAt(chosenchar);
  }

  PASS_RESULTS.html(pass);
});

// Decides the size of the password
function passSize() {
  let sizeArr = [];
  for (i = 8; i < 128; i++) {
    sizeArr[i] = i;
  }
  let chosenSize = Math.floor(Math.random() * sizeArr.length);
  return sizeArr[chosenSize];
}

// Copies the generated password
PASS_COPY.click(() => {
  PASS_RESULTS[0].select();
  PASS_RESULTS[0].setSelectionRange(0, 99999);
  navigator.clipboard.writeText(PASS_RESULTS[0].innerHTML);
  copyPassFB();
});

// Visual feedback
function copyPassFB() {
  PASS_COPY.html("Copied");
  setTimeout(() => {
    PASS_COPY.html("Copy to clipboard");
  }, 1500);
}

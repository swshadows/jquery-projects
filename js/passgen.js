const PASS_LCHARSET = "abcdefghijklmopqrstuvwxyz";
const PASS_UCHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const PASS_NCHARSET = "0123456789";
const PASS_SCHARSET = "!@#$%^&*()";
const PASS_ARRAY_CHARSETS = [PASS_LCHARSET, PASS_UCHARSET, PASS_NCHARSET, PASS_SCHARSET];

// Generates the password
$("#pass-generate").click(() => {
  let pass = "";
  let size = passSize();
  for (i = 0; i < size; i++) {
    let chosenArr = Math.floor(Math.random() * PASS_ARRAY_CHARSETS.length);
    let chosenchar = Math.floor(Math.random() * PASS_ARRAY_CHARSETS[chosenArr].length);
    pass += PASS_ARRAY_CHARSETS[chosenArr].charAt(chosenchar);
  }

  $("#pass-results").html(pass);
});

function passSize() {
  let sizeArr = [12, 13, 14, 15];
  let chosenSize = Math.floor(Math.random() * sizeArr.length);
  return sizeArr[chosenSize];
}

// Copies the generated password
$("#pass-copy").click(() => {
  copyPass();
});

function copyPass() {
  let textarea = $("#pass-results");
  textarea[0].select();
  textarea[0].setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textarea[0].innerHTML);
  copyPassFB();
}

// Visual feedback
function copyPassFB() {
  $("#pass-copy").html("Copied");
  setTimeout(() => {
    $("#pass-copy").html("Copy to clipboard");
  }, 1500);
}

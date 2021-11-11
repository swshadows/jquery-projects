// Constants and variables
const CAE_CHARSET = "abcdefghijklmnopqrstuvwxyz";
const CAE_CYPHER = "xyzabcdefghijklmnopqrstuvw";
const CYPH_BTN = $("#cae-cyph-btn");
const CAE_RESULTS = $("#cae-results");
const DECYPH_BTN = $("#cae-decyph-btn");

// Functions
// Button to cypher
CYPH_BTN.click(() => {
  let caeResult = "";
  let inputval = $("#cae-cyph-input").val();
  for (i = 0; i < inputval.length; i++) {
    caeResult += cyphering(caeResult, inputval[i].toLowerCase());
  }
  printResults(caeResult, "cyph");
});

// Cyphers result
function cyphering(result, currInput) {
  if (currInput == " " || currInput == "," || currInput == ".") {
    result = currInput;
  } else {
    for (n = 0; n < CAE_CHARSET.length; n++) {
      if (currInput == CAE_CHARSET.charAt(n)) {
        result = CAE_CYPHER.charAt(n);
        break;
      }
    }
  }

  return result;
}

// Button to decypher text
DECYPH_BTN.click(() => {
  let caeResult = "";
  let inputval = $("#cae-decyph-input").val();
  for (i = 0; i < inputval.length; i++) {
    caeResult += decyphering(caeResult, inputval[i].toLowerCase());
  }
  printResults(caeResult, "decyph");
});

// Decypher result
function decyphering(result, currInput) {
  if (currInput == " " || currInput == "," || currInput == ".") {
    result = currInput;
  } else {
    for (n = 0; n < CAE_CYPHER.length; n++) {
      if (currInput == CAE_CYPHER.charAt(n)) {
        result = CAE_CHARSET.charAt(n);
        break;
      }
    }
  }

  return result;
}

// Prints results
function printResults(arg, type) {
  if (type == "cyph") {
    if (arg != "") {
      CAE_RESULTS.html(`Cyphered text: ${arg}`);
      CAE_RESULTS.css("display", "block");
    } else {
      CAE_RESULTS.css("display", "none");
    }
  } else {
    if (arg != "") {
      CAE_RESULTS.html(`Decyphered text: ${arg}`);
      CAE_RESULTS.css("display", "block");
    } else {
      CAE_RESULTS.css("display", "none");
    }
  }
}

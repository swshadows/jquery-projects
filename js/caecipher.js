// Constants and variables
const CAE_CHARSET = "abcdefghijklmnopqrstuvwxyz";
const CAE_CYPHER = "xyzabcdefghijklmnopqrstuvw";

// Button to cypher
$("#cae-cyph-btn").click(() => {
  let caeResult = "";
  let inputval = $("#cae-cyph-input").val();
  for (i = 0; i < inputval.length; i++) {
    caeResult += cyphering(caeResult, inputval[i].toLowerCase());
  }
  if (caeResult != "") {
    $("#cae-results").html(`Cyphered text: ${caeResult}`);
    $("#cae-results").css("display", "block");
  } else {
    $("#cae-results").css("display", "none");
  }
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
$("#cae-decyph-btn").click(() => {
  let caeResult = "";
  let inputval = $("#cae-decyph-input").val();
  for (i = 0; i < inputval.length; i++) {
    caeResult += decyphering(caeResult, inputval[i].toLowerCase());
  }
  if (caeResult != "") {
    $("#cae-results").html(`Decyphered text: ${caeResult}`);
    $("#cae-results").css("display", "block");
  } else {
    $("#cae-results").css("display", "none");
  }
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

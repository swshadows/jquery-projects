// Constants and variables
let operator = undefined;
let num = undefined;
let dotted = false;
const SCREEN = $("#calc-screen");
const R_SCREEN = $("#calc-results");

// Functions
// Inserts numbers into screen
$(".calc-num").click((e) => {
  let btn = e.currentTarget.innerHTML;
  SCREEN[0].value += btn;
});

// Selects operator
$(".calc-sym").click((e) => {
  let btn = e.currentTarget.innerHTML;
  if (operator == undefined) {
    if (SCREEN[0].value != "") {
      operator = btn;
      num = parseFloat(SCREEN[0].value);
      R_SCREEN[0].value = ` ${num} ${operator}`;
      SCREEN[0].value = "";
      dotted = false;
    } else calcError("missingNo");
  } else {
    calcDoMath();
    operator = btn;
    R_SCREEN[0].value += ` ${operator}`;
  }
});

// Adds a dot to said number
$(".calc-dot").click(() => {
  if (dotted == false) {
    dotted = true;
    SCREEN[0].value += ".";
  }
});

// Equals makes calculation as well with a few adjustments to logic
$(".calc-equals").click(() => {
  if (num != undefined) {
    if (SCREEN[0].value != "") {
      calcDoMath();
      operator = undefined;
    } else calcError("missingno");
  }
});

// Makes calculation
function calcDoMath() {
  let mathResults;
  switch (operator) {
    case "÷":
      mathResults = num / SCREEN[0].value;
      break;
    case "x":
      mathResults = num * SCREEN[0].value;
      break;
    case "-":
      mathResults = num - SCREEN[0].value;
      break;
    case "+":
      mathResults = num + parseFloat(SCREEN[0].value);
      break;
    case "xⁿ":
      mathResults = Math.pow(num, SCREEN[0].value);
      break;
    case "%":
      mathResults = (num / 100) * SCREEN[0].value;
      break;
    case "EXP":
      mathResults = num * Math.pow(10, SCREEN[0].value);
      break;
    default:
      console.log("ERROR_ON_calcDoMath");
      break;
  }
  SCREEN[0].value = "";
  R_SCREEN[0].value = ` ${mathResults}`;
  num = mathResults;
}

// Makes calculation for special characters
$(".calc-special").click((e) => {
  let btn = e.currentTarget.innerHTML;
  let mathResults;
  if (SCREEN[0].value != "") {
    switch (btn) {
      case "√":
        mathResults = Math.sqrt(SCREEN[0].value);
        break;
      case "sin()":
        mathResults = Math.sin(SCREEN[0].value);
        break;
      case "cos()":
        mathResults = Math.cos(SCREEN[0].value);
        break;
      case "tan()":
        mathResults = Math.tan(SCREEN[0].value);
        break;
      case "log<sub>10</sub>":
        mathResults = Math.log10(SCREEN[0].value);
        break;
      case "ln":
        mathResults = Math.log(SCREEN[0].value);
        break;
      case "π":
        mathResults = Math.PI * SCREEN[0].value;
        break;
      default:
        console.log("ERROR_ON_click$.calc-special");
        break;
    }

    SCREEN[0].value = "";
    R_SCREEN[0].value = ` ${mathResults}`;
  } else calcError("missingNo");
});

// All clear function, resets everything
$(".calc-AC").click(() => {
  operator = undefined;
  dotted = false;
  num = undefined;
  R_SCREEN[0].value = "";
  SCREEN[0].value = "";
  calcError("allClear");
});

// Clear entry function, removes last inputted number
$(".calc-CE").click(() => {
  let str = SCREEN[0].value;
  SCREEN[0].value = str.slice(0, -1);
});

// Error messages
function calcError(arg) {
  switch (arg) {
    case "missingNo":
      $("#calc-messages").val("SYNTAX_ERROR: Faltam numeros");
      break;
    case "allClear":
      $("#calc-messages").val("AC_Pressed: Valores resetados");
      $("#calc-messages").css("color", "#436d36");
      break;
  }
  setTimeout(() => {
    $("#calc-messages").val("");
    $("#calc-messages").css("color", "var(--errorred)");
  }, 1500);
}

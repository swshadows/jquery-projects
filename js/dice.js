// Constants and variables
const DICES = [0, 1, 2, 3, 4, 5];
let rolled = false;
let val = $("#dice-container");

// Dynamically alocates the location of dice images in array
for (i in DICES) {
  DICES[i] = `../assets/dices/dice-${parseInt(i) + 1}.png`;
}

// Adds dice to dice-container
$("#dice-add-btn").click(() => {
  let diceqty = $("#dice-input").val();
  if (diceqty > 0) {
    addDice(diceqty);
    rollAdj();
  }
});

// Adds a dice to the table
function addDice(arg) {
  for (i = 0; i < arg; i++) {
    val[0].innerHTML += `<img class="dice-show dice-img" src="${DICES[0]}" />`;
  }
  setTimeout(() => {
    $(".dice-show").removeClass("dice-show");
  }, 230);
  return val;
}

// Adjusts info: max min and dice quantity
function rollAdj(arg) {
  let diceqty = $(".dice-img").length;
  $("#dice-maxroll").html(`Max Possible Roll: ${diceqty * 6}`);
  $("#dice-minroll").html(`Min Possible Roll: ${diceqty}`);
  if (arg == "clear") {
    $("#dice-maxroll").html("");
    $("#dice-minroll").html("");
    $("#dice-roll").html("");
  }
}

// Roll all dices
$("#dice-roll-btn").click(() => {
  let dicesTable = $(".dice-img");
  diceRandomAnimate(dicesTable);
  setTimeout(() => {
    let roll = 0;
    for (i = 0; i < dicesTable.length; i++) {
      let chosenDice = Math.floor(Math.random() * DICES.length);
      dicesTable[i].setAttribute("src", DICES[chosenDice]);
      roll += chosenDice + 1;
    }
    $("#dice-roll").html(`Roll: ${roll}`);
  }, 1500);
});

// Randomly animates dices
function diceRandomAnimate(arg) {
  let interval;

  interval = setInterval(() => {
    for (i = 0; i < arg.length; i++) {
      let randomSprite = Math.floor(Math.random() * DICES.length);
      arg[i].setAttribute("src", DICES[randomSprite]);
    }
  }, 150);

  setTimeout(() => {
    clearTimeout(interval);
  }, 1350);
}

// Clear all dices
$("#dice-clear-btn").click(() => {
  $(".dice-img").addClass("dice-fade");
  setTimeout(() => {
    val.html("");
  }, 230);
  rollAdj("clear");
});

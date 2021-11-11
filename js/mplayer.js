// Constants and variables
const M_INPUT = $("#mplayer-input");

// Functions
// Upload music
$("#mplayer-upl-btn").click(() => {
  let input = M_INPUT[0].files[0];
  $("#mplayer-audio-src").attr("src", URL.createObjectURL(input));
  document.getElementById("mplayer-audio").load();
  setMisc($("#mplayer-mplaying"));
});

// Sets music name
function setMisc(arg) {
  let input = M_INPUT[0].files[0];
  let name = input.name;
  arg.html(`Now playing: ${name}`);
}

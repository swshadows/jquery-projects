// Upload music
$("#mplayer-upl-btn").click(() => {
  let input = $("#mplayer-input")[0].files[0];
  $("#mplayer-audio-src").attr("src", URL.createObjectURL(input));
  document.getElementById("mplayer-audio").load();
  setMisc($("#mplayer-mplaying"));
});

// Sets miscellaneous stuff such as music name
function setMisc(arg) {
  let input = $("#mplayer-input")[0].files[0];
  let name = input.name;
  arg.html(`Now playing: ${name}`);
}

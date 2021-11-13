// Constants and variables
const CTH_PICKER = $("#hexpicker-cthcolor");
const CTH_CODE = $("#hexpicker-cthcode");
const CTH_BTN = $("#hexpicker-cthbtn");
const HTC_PICKER = $("#hexpicker-htccolor");
const HTC_CODE = $("#hexpicker-htccode");

// Functions
// Tracks CTH picker changes
CTH_PICKER.change(() => {
  CTH_CODE.val(`${CTH_PICKER.val()}`);
});

// Copies hexcode
CTH_BTN.click(() => {
  CTH_CODE[0].select();
  CTH_CODE[0].setSelectionRange(0, 99999);
  navigator.clipboard.writeText(CTH_CODE[0].value);
  copyHexFB(CTH_BTN);
});

// Tracks HTC picker changes
HTC_CODE.change(() => {
  HTC_PICKER.val(`#${HTC_CODE.val()}`);
});

// Visual feedback
function copyHexFB(arg) {
  arg.html("Copiado");
  setTimeout(() => {
    arg.html("Copiar para a área de transferência");
  }, 1500);
}

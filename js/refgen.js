// Constants and variables
let bibliography = "";
const REF_P = $("#refgen-results");
const REF_FANT_AUTHOR = $("#refgen-wauthor-fant");

// Functions
// Generates reference for books
$("#refgen-generate").click(() => {
  const AUTHOR_NAMES = $(".refgen-authname-input");
  const AUTHOR_SURNAMES = $(".refgen-authsurname-input");
  const TITLE = $("#refgen-title-input")[0];
  const EDITION = $("#refgen-edition-input")[0];
  const PUB_LOC = $("#refgen-location-input")[0];
  const PUB_NAME = $("#refgen-publisher-input")[0];
  const PUB_YEAR = $("#refgen-date-input")[0];

  // Formats and adds author names to biblio
  for (i = 0; i < AUTHOR_NAMES.length; i++) {
    let uppersur = AUTHOR_SURNAMES[i].value;
    let name = AUTHOR_NAMES[i].value;
    bibliography += `${uppersur.toUpperCase()}, ${name}. `;
  }
  // Formats and add title of book to biblio
  bibliography += `<strong>${TITLE.value}.</strong> `;
  // Checks edition on input and formats and adds edition to biblio
  if (EDITION.value == "U" || EDITION.value == "u") bibliography += `Ed. única, `;
  else bibliography += `${EDITION.value}ª ed., `;
  // Formats and adds the publishment details to biblio
  bibliography += `${PUB_LOC.value}: ${PUB_NAME.value}, ${PUB_YEAR.value}.`;

  printRef();
});

// Generates results for websites
$("#refgen-wgenerate").click(() => {
  const WAUTHOR_NAME = $(".refgen-wauthname-input")[0];
  if (!REF_FANT_AUTHOR.is(":checked")) {
    const WAUTHOR_SURNAME = $(".refgen-wauthsurname-input")[0];
    bibliography += `${WAUTHOR_SURNAME.value.toUpperCase()}, `;
  }
  const WTITLE = $("#refgen-wtitle-input")[0];
  const WHOLDER = $("#refgen-wnameholder-input")[0];
  const WYEAR = $("#refgen-wdate-input")[0];
  const WURL = $("#refgen-wurl-input")[0];
  const WACESS = $("#refgen-waccess-input")[0];
  bibliography += `${WAUTHOR_NAME.value}. `;
  bibliography += `${WTITLE.value}. <strong>${WHOLDER.value}</strong>, ${WYEAR.value}. `;
  bibliography += `Disponivel em: ${WURL.value}. Acesso em ${WACESS.value}`;
  printRef();
});

// Listener for fantasy names for websites
REF_FANT_AUTHOR.change(() => {
  const WAUTHORS = $("#refgen-wauthor-subdiv");
  if (REF_FANT_AUTHOR.is(":checked")) {
    WAUTHORS.html(`<input class="refgen-wauthname-input" type="text" placeholder="Nome" />`);
  } else {
    WAUTHORS.html(`<input class="refgen-wauthname-input" type="text" placeholder="Nome" />
    <input class="refgen-wauthsurname-input" type="text" placeholder="Sobrenome" />`);
  }
});

// Prints result on screen
function printRef() {
  REF_P.html(bibliography);
  bibliography = "";
  REF_P.css("display", "block");
}

// Adds more authors inputs
$("#refgen-add-author").click(() => {
  $(".refgen-div-author")[0].innerHTML += `<div class="refgen-subdiv-author">
  <input class="refgen-authname-input" type="text" placeholder="Nome" />
  <input class="refgen-authsurname-input" type="text" placeholder="Sobrenome" />
</div>`;
});

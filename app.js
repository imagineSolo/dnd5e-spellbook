const srd = new SRD;
const ui = new UI;


const classSelect = document.querySelector('#class-select');
classSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const classSelected = e.target.value;
  console.log(classSelected);
  srd.getSpells(classSelected)
    .then(data => {
      ui.classSpells(classSelected, data)
        .then(classSelected, data => {
          ui.filterSpells(classSelected, data);
        });
    });
});

const levelSelect = document.querySelector('#spell-level-select');
levelSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const levelSelected = e.target.value;
  console.log(levelSelected);
  srd.getSpells(levelSelected)
    .then(data => {
      ui.levelSpells(levelSelected, data)
        .then(levelSelected, data => {
          ui.filterSpells(levelSelected, data);
        });
    });
});

const schoolSelect = document.querySelector('#magic-school-select');
schoolSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const schoolSelected = e.target.value;
  console.log(schoolSelected);
  srd.getSpells(schoolSelected)
    .then(data => {
      ui.schoolSpells(schoolSelected, data)
        .then(schoolSelected, data => {
          ui.filterSpells(schoolSelected, data);
        });
    });
});


document.getElementById('table-results').addEventListener('click', (e) => {
  // TEST
  e.preventDefault();
  if (e.target.className === 'spell-name') {
    console.log(123);
    const spellInfo = document.createElement("div");
    spellInfo.className = 'nine.columns';
    spellInfo.innerHTML = `
      Spell Name: @@@;
      Level: @@@;
      School: @@@;
      Components: @@@;
      Duration: @@@
    `;
    document.body.appendChild(spellInfo);
  }
});
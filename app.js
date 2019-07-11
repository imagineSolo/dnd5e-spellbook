const srd = new SRD;
const ui = new UI;

const classSelect = document.querySelector('#class-select');
const levelSelect = document.querySelector('#spell-level-select');
const schoolSelect = document.querySelector('#magic-school-select');

classSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const classSelected = e.target.value;
  console.log(classSelected);
  srd.getSpells(classSelected)
    .then(data => {
      ui.classSpells(classSelected, data);
    })
});

levelSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const levelSelected = e.target.value;
  console.log(levelSelected);
  srd.getSpells(levelSelected)
    .then(data => {
      ui.levelSpells(levelSelected, data);
    })
});

schoolSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const schoolSelected = e.target.value;
  console.log(schoolSelected);
  srd.getSpells(schoolSelected)
    .then(data => {
      ui.schoolSpells(schoolSelected, data);
    })
});
const ui = new UI;

let json = '';

(async function getSpells() {
  const dataResponse = await fetch('spells.json');
  const data = await dataResponse.json();
  json = data;
  return json;
})();

const classSelect = document.querySelector('#class-select');

classSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const classSelected = e.target.value;
  console.log(classSelected);
  ui.classSpells(classSelected, json)
    .then(classSelected, data => {
      ui.filterSpells(classSelected, data);
    });
});


const levelSelect = document.querySelector('#spell-level-select');

levelSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const levelSelected = e.target.value;
  console.log(levelSelected);
  ui.levelSpells(levelSelected, json)
    .then(levelSelected, data => {
      ui.filterSpells(levelSelected, data);
    });
});

const schoolSelect = document.querySelector('#magic-school-select');

schoolSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const schoolSelected = e.target.value;
  console.log(schoolSelected);
  ui.schoolSpells(schoolSelected, json)
    .then(schoolSelected, data => {
      ui.filterSpells(schoolSelected, data);
    });
});


document.getElementById('table-results').addEventListener('click', (e) => {
  e.preventDefault();
  ui.showDesc(e);
});

document.getElementById('description').addEventListener('click', (e) => {
  ui.closeDesc(e.target);
})
const ui = new UI;

let json = [];

let classSelected = '';
let levelSelected = '';
let schoolSelected = '';

const container = document.querySelector('.container');
const descPlace = document.getElementById('desc-place');
const description = document.createElement('div');

(async function getSpells() {
  const dataResponse = await fetch('spells.json');
  const data = await dataResponse.json();
  json = data;
  return json;
})();

const classSelect = document.querySelector('#class-select');

classSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const selectedClass = e.target.value;
  if (selectedClass !== 'all-classes') {
    classSelected = selectedClass
  } else {
    classSelected = ''
  }
  ui.filterBySelectedOptions('class');
});

const levelSelect = document.querySelector('#spell-level-select');

levelSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const selectedLevel = e.target.value;
  if (selectedLevel !== 'all-levels') {
    levelSelected = selectedLevel
  } else {
    levelSelected = ''
  }
  ui.filterBySelectedOptions('level')
});

const schoolSelect = document.querySelector('#magic-school-select');

schoolSelect.addEventListener('change', (e) => {
  ui.clearSpells();
  const selectedSchool = e.target.value;
  if (selectedSchool !== 'all-schools') {
    schoolSelected = selectedSchool
  } else {
    schoolSelected = ''
  }
  ui.filterBySelectedOptions('school')
});


document.getElementById('table-results').addEventListener('click', (e) => {
  e.preventDefault();
  ui.showDesc(e);
});

document.getElementById('desc-place').addEventListener('click', (e) => {
  ui.closeDesc(e.target);
})
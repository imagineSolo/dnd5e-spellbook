const srd = new SRD;
const ui = new UI;

const classSelect = document.querySelector('#class-select');

classSelect.addEventListener('change', (e) => {
  const classSelected = e.target.value;
  console.log(classSelected);

  srd.getSpells(classSelected)
    .then(data => {
      ui.showSpells(classSelected, data);
      console.log(data);
    })
});
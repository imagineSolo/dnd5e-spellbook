class UI {
  constructor() {
    this.output = document.querySelector('#test-output');
    this.table = document.querySelector('#table-results');
  }
  showSpells(classSelected, data) {
    if (classSelected === 'all-classes') {
      this.output.innerHTML += `<li>${data.name}</li>`;
    } else {
      let count = 0;
      for (count = 0; count < `${data.count}`; count++) {
        let gravis = data.results[count].name;
        this.output.innerHTML += `<li>${gravis}</li>`;
      }
    }
  }
}
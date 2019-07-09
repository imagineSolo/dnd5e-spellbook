class UI {
  constructor() {
    this.output = document.querySelector('#test-output');
    // this.table = document.querySelector('#table-results');
  }
  classSpells(classSelected, data) {
    let i = 0;
    if (classSelected === 'all-classes') {
      for (i = 0; i < `${data.length}`; i++) {
        let count = data[i].name;
        this.output.innerHTML += `<li>${count}</li>`;
        console.log(count);
      }
    } else {
      const dataFiltered = data.filter(function (classname) {
        return classname.class.includes(classSelected);
      });
      for (i = 0; i < `${dataFiltered.length}`; i++) {
        let count = dataFiltered[i].name;
        this.output.innerHTML += `<li>${count}</li>`;
        console.log(dataFiltered);
      }
    }
  };

  levelSpells(levelSelected, data) {
    let i = 0;
    if (levelSelected === 'all-levels') {
      for (i = 0; i < `${data.length}`; i++) {
        let count = data[i].name;
        this.output.innerHTML += `<li>${count}</li>`;
        console.log(count);
      }
    } else {
      const dataFiltered = data.filter(function (levelname) {
        return levelname.level.includes(levelSelected);
      });
      for (i = 0; i < `${dataFiltered.length}`; i++) {
        let count = dataFiltered[i].name;
        this.output.innerHTML += `<li>${count}</li>`;
        console.log(dataFiltered);
      }
    }
  };

  schoolSpells(schoolSelected, data) {
    let i = 0;
    if (schoolSelected === 'all-schools') {
      for (i = 0; i < `${data.length}`; i++) {
        let count = data[i].name;
        this.output.innerHTML += `<li>${count}</li>`;
        console.log(count);
      }
    } else {
      const dataFiltered = data.filter(function (schoolname) {
        return schoolname.school.includes(schoolSelected);
      });
      for (i = 0; i < `${dataFiltered.length}`; i++) {
        let count = dataFiltered[i].name;
        this.output.innerHTML += `<li>${count}</li>`;
        console.log(dataFiltered);
      }
    }
  }
}
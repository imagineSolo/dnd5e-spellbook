class UI {
  constructor() {
    this.output = document.querySelector('#test-output');
    this.table = document.querySelector('#table-results');
  }

  // multiFilter(array, filters) {
  //   console.log(321);
  //   const filterKeys = Object.keys(filters);
  //   return array.filter((item) => {
  //     return filterKeys.every(key => {
  //       if (!filters[key].length) return true;
  //       return filters[key].includes(item[key]);
  //     });
  //   });
  // }

  // filterSpells(spells, key) {
  //   ui.multiFilter(spells, key);
  //   console.log(123);
  //   // ...
  // }

  sortSpells(key) {
    return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
      let comparison = a[key].localeCompare(b[key]);
      return comparison;
    };
  }

  clearSpells() {
    this.table.innerHTML = '';
  }

  classSpells(classSelected, data) {
    let i = 0;
    if (classSelected === 'all-classes') {
      for (i = 0; i < `${data.length}`; i++) {
        data.sort(ui.sortSpells('level'));
        let count = data[i];
        this.table.innerHTML += `
        <tr>
        <td><a href='#' class='spell-name'>${count.name}</a></td>
        <td>${count.level}</td>
        <td>${count.school}</td>
        </tr>`;
      }
    } else {
      const dataFiltered = data.filter(function (classname) {
        return classname.class.includes(classSelected);
      });
      dataFiltered.sort(ui.sortSpells('level'));
      for (i = 0; i < `${dataFiltered.length}`; i++) {
        let count = dataFiltered[i];
        this.table.innerHTML += `
        <tr>
        <td><a href='#' class='spell-name'>${count.name}</a></td>
        <td>${count.level}</td>
        <td>${count.school}</td>
        </tr>`;
      }
    }
  };

  levelSpells(levelSelected, data) {
    let i = 0;
    if (levelSelected === 'all-levels') {
      for (i = 0; i < `${data.length}`; i++) {
        data.sort(ui.sortSpells('level'));
        let count = data[i];
        this.table.innerHTML += `
        <tr>
        <td><a href='#' class='spell-name'>${count.name}</a></td>
        <td>${count.level}</td>
        <td>${count.school}</td>
        </tr>`;
      }
    } else {
      const dataFiltered = data.filter(function (levelname) {
        return levelname.level.includes(levelSelected);
      });
      dataFiltered.sort(ui.sortSpells('level'));
      for (i = 0; i < `${dataFiltered.length}`; i++) {
        let count = dataFiltered[i];
        this.table.innerHTML += `
        <tr>
        <td><a href='#' class='spell-name'>${count.name}</a></td>
        <td>${count.level}</td>
        <td>${count.school}</td>
        </tr>`;
      }
    }
  };

  schoolSpells(schoolSelected, data) {
    let i = 0;
    if (schoolSelected === 'all-schools') {
      for (i = 0; i < `${data.length}`; i++) {
        data.sort(ui.sortSpells('level'));
        let count = data[i];
        this.table.innerHTML += `
        <tr>
        <td><a href='#' class='spell-name'>${count.name}</a></td>
        <td>${count.level}</td>
        <td>${count.school}</td>
        </tr>`;
      }
    } else {
      const dataFiltered = data.filter(function (schoolname) {
        return schoolname.school.includes(schoolSelected);
      });
      dataFiltered.sort(ui.sortSpells('level'));
      for (i = 0; i < `${dataFiltered.length}`; i++) {
        let count = dataFiltered[i];
        this.table.innerHTML += `
        <tr>
        <td><a href='#' class='spell-name'>${count.name}</a></td>
        <td>${count.level}</td>
        <td>${count.school}</td>
        </tr>`;
      }
    }
  };
}
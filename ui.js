class UI {
  constructor() {
    this.table = document.querySelector('#table-results');
  }

  filterSpells(classSelected, data) {
    const selected = classSelected;
    console.log(selected);
    const selectedOption = data.filter(
      spell => spell[0].name === selected);
    return selectedOption;
  }

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
    let i = '';
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
    let i = '';
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
    let i = '';
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

  showDesc(e) {
    if (e.target.className === 'spell-name') {
      const description = document.getElementById('description');
      description.classList.remove('hidden');
      description.classList.add('description');
      description.innerHTML = `
        <button class="close">x</button>
        <div class='box-1'>${json[0].name}</div>
        <div class='box-2'>Level: ${json[0].level}</div>
        <div class='box-3'>School: ${json[0].school}</div>
        <div class='box-4'>Range: ${json[0].range}</div>
        <div class='box-5'>Components: ${json[0].components}</div>
        <div class='box-6'>Ritual: ${json[0].ritual}</div>
        <div class='box-7'>Material: ${json[0].material}</div>
        <div class='box-8'>Concentration: ${json[0].concentration}</div>
        <div class='box-9'>Casting time: ${json[0].casting_time}</div>
        <div class='box-10'>Duration: ${json[0].duration}</div>
        <div class='box-11'>Description: ${json[0].desc}</div>
      `;
    }
  }

  closeDesc(target) {
    if (target.className === 'close') {
      console.log(target.parentElement)
      target.parentNode.className += 'hidden';
    }
  }
}
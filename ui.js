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
    console.log(e.target.text)
    const spellName = e.target.text;
    let spellIndex;
    json.forEach((element, index) => {
      if (element.name === spellName) {
        spellIndex = index
      }
    });
    if (e.target.className === 'spell-name') {
      descPlace.appendChild(description);
      descPlace.classList.remove('hidden');
      descPlace.classList.add('description');
      description.innerHTML = `
        <button class="close">x</button>
        <div class='title box-1'>${json[spellIndex].name}</div>
        <div class='box-2'><span class="title">Level:</span> ${json[spellIndex].level}</div>
        <div class='box-3'><span class="title">School:</span> ${json[spellIndex].school}</div>
        <div class='box-4'><span class="title">Range:</span> ${json[spellIndex].range}</div>
        <div class='box-5'><span class="title">Components:</span> ${json[spellIndex].components}</div>
        <div class='box-6'><span class="title">Ritual:</span> ${json[spellIndex].ritual}</div>
        <div class='box-7'><span class="title">Material:</span> ${json[spellIndex].material}</div>
        <div class='box-8'><span class="title">Concentration:</span> ${json[spellIndex].concentration}</div>
        <div class='box-9'><span class="title">Casting time:</span> ${json[spellIndex].casting_time}</div>
        <div class='box-10'><span class="title">Duration:</span> ${json[spellIndex].duration}</div>
        <div class='box-11'><span class="title">Description:</span> ${json[spellIndex].desc}</div>
      `;
      container.classList.add('transparent');
    }
  }

  closeDesc(target) {
    if (target.className === 'close') {
      descPlace.removeChild(description);
      descPlace.classList.add('hidden');
      descPlace.classList.remove('description');
      container.classList.remove('transparent');
    }
  }
}
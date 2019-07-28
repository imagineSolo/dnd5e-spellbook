class UI {
  constructor() {
    this.table = document.querySelector('#table-results');
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

  filterBySelectedOptions(filterOptionSelected) {
    let filteredData = [];
    filteredData = this.filterByClass(json);
    filteredData = this.filterByLevel(filteredData);
    filteredData = this.filterBySchool(filteredData);
    filteredData.sort(this.sortSpells('level'));
    this.createHtml(filterOptionSelected, filteredData);
    console.log(filteredData);
  }

  filterByClass(data) {
    if (classSelected !== '') {
      return data.filter(el => el.class.includes(classSelected))
    } else {
      return data
    }
  }

  filterByLevel(data) {
    if (levelSelected !== '') {
      return data.filter(el => el.level.includes(levelSelected))
    } else {
      return data
    }
  }

  filterBySchool(data) {
    if (schoolSelected !== '') {
      return data.filter(el => el.school === schoolSelected)
    } else {
      return data
    }
  }

  createHtml(filterOptionSelected, filteredSchools) {
    let output = '';
    filteredSchools.map(el => output += `
    <tr>
    <td><a href='#' class='spell-name'>${el.name}</a></td>
    <td>${el.level}</td>
    <td>${el.school}</td>
    </tr>`);
    this.table.innerHTML = output;
  }

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
        <div class='box-11'><span class="title">Description:</span> <span class="spell-desc">${json[spellIndex].desc}</span></div>
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
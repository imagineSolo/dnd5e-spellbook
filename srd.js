class SRD {
  async getSpells(optionSelected) {
    const dataResponse = await fetch('spells.json');
    const data = await dataResponse.json();
    console.log(data);
    ui.classSpells(optionSelected, data);
    ui.levelSpells(optionSelected, data);
    ui.schoolSpells(optionSelected, data);
  }
}
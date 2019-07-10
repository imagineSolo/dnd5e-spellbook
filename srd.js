class SRD {
  async getSpells(optionSelected) {
    const dataResponse = await fetch('spells.json');
    const data = await dataResponse.json();
    ui.classSpells(optionSelected, data);
    ui.levelSpells(optionSelected, data);
    ui.schoolSpells(optionSelected, data);
  }
}
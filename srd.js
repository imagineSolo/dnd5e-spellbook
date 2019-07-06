class SRD {
  async getSpells(spellclass) {
    if (spellclass === 'all-classes') {
      const allClassResponse = await fetch('http://www.dnd5eapi.co/api/spells/');
      const allClass = await allClassResponse.json();
      return allClass;
    } else {
      const classResponse = await fetch(`http://www.dnd5eapi.co/api/spells/${spellclass}`);
      const spellClass = await classResponse.json();
      return spellClass;
    }
  }
}
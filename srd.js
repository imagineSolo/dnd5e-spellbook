class SRD {
  async getSpells(spellclass) {
    if (spellclass === 'all-classes') {
      let count;
      for (count = 1; count <= 319; count++) {
        console.log(count);
        const allClassResponse = await fetch(`http://www.dnd5eapi.co/api/spells/${count}/`);
        const allClass = await allClassResponse.json();
        console.log(allClass);
        return allClass;
      }
    } else {
      const classResponse = await fetch(`http://www.dnd5eapi.co/api/spells/${spellclass}`);
      const spellClass = await classResponse.json();
      console.log(spellClass);
      return spellClass;
    }
  }
}
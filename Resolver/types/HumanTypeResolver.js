const wands = require('#data/wands.json')
const humanTypeResolver = {

   wand(obj) {
       return wands.find(wand => wand.character_id === obj.id);
   }
}

module.exports = humanTypeResolver
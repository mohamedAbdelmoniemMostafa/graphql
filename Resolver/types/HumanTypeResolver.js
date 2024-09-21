
const humanTypeResolver = {

   wand(obj,_,context) {
       return context.wands.find(wand => wand.character_id === obj.id);
   }
}

module.exports = humanTypeResolver
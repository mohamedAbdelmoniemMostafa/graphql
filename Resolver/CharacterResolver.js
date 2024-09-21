
const characters = (_,__,context) => {
    return context.charactersData;
}

const createCharacter = (_,{input},context) => {
    const id = context.charactersData.length + 1
    context.wands.push({character_id:id,...input.wand})
    context.charactersData.push({
        id,
        ...input
    })
    return context.charactersData.find((character) => character.id === id)
}
module.exports = {
    characters,
    createCharacter
}
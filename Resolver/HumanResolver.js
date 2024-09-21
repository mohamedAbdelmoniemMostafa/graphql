
const humans = (_,__,context) => context.charactersData.filter((character) => !character.species)

const human = (_, {id},context) => {
    return context.charactersData.find((character) => character.id === id)
}


module.exports = {
    humans,human
}
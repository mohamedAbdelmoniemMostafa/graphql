
const nonHumans = (_,__,context) => context.charactersData.filter((character) => !!character.species)

module.exports = {
    nonHumans
}
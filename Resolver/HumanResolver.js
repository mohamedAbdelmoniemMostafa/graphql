const charactersData = require('#data/harrypotter.json')

const humans = () => charactersData.filter((character) => !character.species)

module.exports = {
    humans
}
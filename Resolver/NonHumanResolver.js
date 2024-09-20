const charactersData = require('#data/harrypotter.json')

const nonHumans = () => charactersData.filter((character) => !!character.species)

module.exports = {
    nonHumans
}
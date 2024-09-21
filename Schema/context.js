const charactersData = require('#data/harrypotter.json')
const wands = require('#data/wands.json')
const context = ()=>{
    return {
        isLoggedIn:true,
        charactersData,
        wands

    }
}

module.exports = context
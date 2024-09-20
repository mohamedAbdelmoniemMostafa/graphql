const users = require('#query/UserQuery.js')
const spaces = require('#query/SpaceQuery.js')
const Humans = require('#query/HumanQuery.js')
const NonHumans = require('#query/NonHumanQuery.js')
const CharacterQuery = require('#query/CharacterQuery.js')

const mainQuery = `
 type Query {
        getMsg(msg:String):String
       ${users}
       ${spaces}
    }`;

const appoloQuery = ` type Query {
       ${Humans}
       ${NonHumans}
       ${CharacterQuery}
    }`

module.exports = {
    mainQuery,
    appoloQuery
}

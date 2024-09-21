const spaceMutation = require("#mutation/SpaceMutation.js")
const characterMutation = require("#mutation/CharacterMutation.js")
const humanMutation = require("#mutation/HumanMutation.js")

const mainMutation = `type Mutation {
    addMsg(msg:String):String
    ${spaceMutation}
}`

const appoloMutation = `type Mutation {
    ${characterMutation}
    ${humanMutation}
}`
module.exports = {
    mainMutation,
    appoloMutation
}
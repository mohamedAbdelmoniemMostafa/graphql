const spaceMutation = require("#mutation/SpaceMutation.js")

const mutation = `type Mutation {
    addMsg(msg:String):String
    ${spaceMutation}
}`

module.exports = mutation


const {addMsg,getMsg} = require('#resolver/MessageResolver.js')
const {users,user} = require('#resolver/UserResolver.js')
const {humans,human} = require('#resolver/HumanResolver.js')
const {nonHumans} = require('#resolver/NonHumanResolver.js')
const {characters,createCharacter} = require('#resolver/CharacterResolver.js')
const characterTypeResolver = require('#resolver/types/CharacterTypeResolver.js')
const humanTypeResolver = require('#resolver/types/HumanTypeResolver.js')
const {getSpace,getSpaces,createSpace,updateSpace} = require('#resolver/SpaceResolver.js')

const root = {
    addMsg,
    getMsg,
    users,
    user,
    getSpaces,
    getSpace,
    createSpace,
    updateSpace,
 }

 const resolvers = {
    Character:characterTypeResolver,
    Human:humanTypeResolver,
    Query: {
        humans,
        human,
        nonHumans,
        characters
    },
    Mutation: {
        createCharacter
    }
  };
 module.exports = {
     root,resolvers
 };
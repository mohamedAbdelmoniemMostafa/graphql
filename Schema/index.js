
const { graphql, buildSchema } = require("graphql")

const SpaceInput = require("#inputs/SpaceInput.js")
const HumanInput = require("#inputs/HumanInput.js")
const WandInput = require("#inputs/WandInput.js")
const CharacterInput = require("#inputs/CharacterInput.js")

const StatusEnum = require("#enum/StatusEnum.js")
const GendarEnum = require('#enum/GendarEnum.js')

const CharacterInterface = require('#interface/CharacterInterface.js')

const PersonType = require("#types/PersonType.js")
const SpaceType = require("#types/SpaceType.js")
const HumanType = require('#types/HumanType.js')
const NonHumanType = require('#types/NonHumanType.js')
const WandType = require('#types/WandType.js')

const {mainQuery,appoloQuery} = require("#query/index.js")
const {mainMutation,appoloMutation} = require("#mutation/index.js")


const schema = buildSchema(`
    # inputs
    ${SpaceInput}
    # enums
    ${StatusEnum}
    # types
    ${PersonType}
    ${SpaceType}
    # query
    ${mainQuery}
    # mutation
    ${mainMutation}
`);


const typeDefs = `#graphql
    # inputs
    ${CharacterInput}
    ${HumanInput}
    ${WandInput}
    # enums
    ${GendarEnum}
    # interfaces
    ${CharacterInterface}
    # types
    ${WandType}
    ${HumanType}
    ${NonHumanType}
    # query
    ${appoloQuery}
    # mutation
    ${appoloMutation}
`;

module.exports = {
    schema,typeDefs
};
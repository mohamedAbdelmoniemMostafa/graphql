
const { graphql, buildSchema } = require("graphql")

const SpaceInput = require("#inputs/SpaceInput.js")

const StatusEnum = require("#enum/StatusEnum.js")
const GendarEnum = require('#enum/GendarEnum.js')

const CharacterInterface = require('#interface/CharacterInterface.js')

const PersonType = require("#types/PersonType.js")
const SpaceType = require("#types/SpaceType.js")
const HumanType = require('#types/HumanType.js')
const NonHumanType = require('#types/NonHumanType.js')
const WandType = require('#types/WandType.js')

const {mainQuery,appoloQuery} = require("#query/index.js")
const mutation = require("#mutation/index.js")


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
    ${mutation}
`);


const typeDefs = `#graphql
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
`;

module.exports = {
    schema,typeDefs
};
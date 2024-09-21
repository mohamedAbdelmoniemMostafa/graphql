const HumanMutation = `
    createHuman(input:HumanInput):Human!
    updateHuman(id:Int!,input:HumanInput):Human!
`;

module.exports = HumanMutation
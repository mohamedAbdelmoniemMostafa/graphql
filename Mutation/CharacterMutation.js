const CharacterMutation = `
    createCharacter(input:CharacterInput):Character!
    updateCharacter(id:Int!,input:CharacterInput):Character!
`;

module.exports = CharacterMutation
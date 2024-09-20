const characterTypeResolver = {
    __resolveType: (obj, context, info) => {
        if (obj.species) 
            return "NonHuman";
        if (!obj.species)
            return "Human";
        return null;
    }
}

module.exports = characterTypeResolver
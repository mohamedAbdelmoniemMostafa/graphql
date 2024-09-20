
const fakeDB = require('#data/fakedb.json')

const getSpace = ({id})=> fakeDB.find((item)=>item.id===id);
const getSpaces = ({status})=> (status)?fakeDB.filter((item)=>item.status===status):fakeDB;
const createSpace = ({input})=>{
    let id = fakeDB.length;
    fakeDB.push({id:id+1,name:input.name,rent:input.rent,status:input.status});
    return fakeDB[id];
};
const updateSpace = ({id,input})=>{
    let index = id-1;
    fakeDB[index]['name'] = input.name
    fakeDB[index]['rent'] = input.rent
    return fakeDB[index];
}

module.exports = {
    getSpace,
    getSpaces,
    createSpace,
    updateSpace
}
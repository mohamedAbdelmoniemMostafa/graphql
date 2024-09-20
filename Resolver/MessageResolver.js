
const fakeDB = require('#data/fakedb.json')

const addMsg = ({msg})=>{
    fakeDB.push({message:msg})
    return msg
}

const getMsg = ({msg})=> fakeDB.find((item)=>item.message===msg)?.message

module.exports = {
    addMsg,
    getMsg
}
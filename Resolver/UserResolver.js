const usersData = require('#data/users.json');

const users = ({keyword})=>!keyword?usersData.users:usersData.users.filter((user)=>user.name.includes(keyword)||user.email.includes(keyword));
const user = ({id})=>usersData.users.find((user)=>user.id===id);

module.exports = {
    users,
    user
}
const { createUserDB } = require('../repository/user.repository');

const createUser = async (name, surname, email, pwd) => {
    const data = await createUserDB(name, surname, email, pwd);
    if (!data.length) throw new Error(`The value didn't come from the client`);
    return data;
}

module.exports = { createUser }
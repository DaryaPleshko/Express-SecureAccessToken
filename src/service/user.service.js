const bcrypt = require('bcrypt');
const { createUserDB, getUserByEmail } = require('../repository/user.repository');

const salt = 2;

const createUser = async (name, surname, email, pwd) => {
    const findEmail = await getUserByEmail(email);
    if (findEmail.length) throw new Error('The user already exists');
    const hashPwd = await bcrypt.hash(pwd, salt);

    const data = await createUserDB(name, surname, email, hashPwd);
    if (!data.length) throw new Error('user is empty');
    return data;
}

module.exports = { createUser }
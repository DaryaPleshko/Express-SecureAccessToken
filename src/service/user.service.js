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
};

const userAuthentication = async (email, pwd) => {
  const findEmail = await getUserByEmail(email);
  if (!findEmail.length) throw new Error(`You are not registered`);

  if (!(await bcrypt.compare(pwd, findEmail[0].pwd))) throw new Error(`Password don't match`);
  return findEmail;
};

module.exports = { createUser, userAuthentication };       

const jwt = require('jsonwebtoken');

const createToken = user => {
  const secret = '4677frtd';
  const dataStoredInToken = { id: user[0].id };

  return jwt.sign(dataStoredInToken, secret);
};

module.exports = { createToken };

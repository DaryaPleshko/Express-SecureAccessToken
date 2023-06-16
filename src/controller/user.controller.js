const express = require('express');
const { createUser, userAuthentication } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse');
const { isValidBody } = require('../helper/validation');

const route = express.Router();

route.post('/reg', isValidBody, async (request, response) => {
  try {
    const { name, surname, email, pwd } = request.body;
    buildResponse(response, 200, await createUser(name, surname, email, pwd));
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.post('/authen', async (request, response) => {
  try {
    const { email, pwd } = request.body;
    buildResponse(response, 200, await userAuthentication(email, pwd));
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

module.exports = route;

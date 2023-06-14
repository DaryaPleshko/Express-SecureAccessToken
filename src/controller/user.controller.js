const express = require('express');
const { createUser } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.post('/', async (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        buildResponse(response, 200, (await createUser(name, surname, email, pwd)));
    } catch (error) {
        buildResponse(response, 404, error.message);
    }
});

module.exports = route;
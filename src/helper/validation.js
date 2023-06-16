const isValidBody = (request, response, next) => {
    const { name, surname, email, pwd } = request.body;
    if (!name) throw new Error(`Value is empty`);
    if (!surname) throw new Error(`Value is empty`);
    if (!isNaN(name)) throw new Error(`incorrect value`);
    if (!isNaN(surname)) throw new Error(`incorrect value`);
    if (!email) throw new Error(`Value is empty`);
    if (!pwd) throw new Error(`Value is empty`);
    next();
}

module.exports = { isValidBody }
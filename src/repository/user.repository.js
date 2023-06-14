const { pool } = require('../db');

const createUserDB = async (name, surname, email, pwd) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const sql = `
        INSERT INTO users(name, surname, email, pwd)
        VALUES ($1, $2, $3, $4) RETURNING *`;
        const gettingSql = (await client.query(sql, [name, surname, email, pwd])).rows;

        await client.query('COMMIT');

        return gettingSql;
    } catch (error) {
        await client.query('ROLLBACK');

        throw new Error(error.message);
    }
}


module.exports = { createUserDB }
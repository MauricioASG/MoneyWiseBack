// dbconnection.js
const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql', 
        user: 'user_moneywise',
        password: '12345',
        database: 'moneywise'
    }
});

module.exports = db;

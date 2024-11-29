const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        user: 'moneywise-db', // Usuario configurado
        password: 'My5q1l@P455', // Contraseña configurada
        database: 'moneywise', // Nombre de la base de datos
        socketPath: '/cloudsql/cellular-fold-443200-f2:us-central1:moneywise-db', // Actualiza con tu instancia
    }
});

module.exports = db;

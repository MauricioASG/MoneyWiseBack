const db = require('./dbconnection');

db.raw('SELECT 1+1 AS result')
    .then((result) => {
        console.log('Conexión exitosa:', result);
        db.destroy(); // Cierra la conexión después de la prueba
    })
    .catch((error) => {
        console.error('Error de conexión:', error);
        db.destroy();
    });

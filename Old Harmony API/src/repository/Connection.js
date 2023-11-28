import mysql2 from 'mysql2/promise';

const con = await mysql2.createConnection({
    host: '191.234.204.68',
    database: 'projetoDW',
    user: 'admin',
    password: '@dm!n'
});

console.log('Conexão com BD realizada com sucesso!');

export {con};
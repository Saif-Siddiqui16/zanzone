const mysql = require('mysql2/promise');
const config = require('./zanzone/config/database');

async function main() {
    const connection = await mysql.createConnection(config);
    const [rows] = await connection.query('SELECT id, name, status, company_id FROM vendors');
    console.log('Vendors:', rows);
    await connection.end();
}
main().catch(console.error);

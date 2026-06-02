import mysql from 'mysql2/promise';

// Configuração da conexão com o MySQL
const pool = mysql.createPool({
    host: 'localhost',       
    user: 'root',            
    password: '1234',   
    database: 'streaming_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
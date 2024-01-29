const mysql = require('mysql2');

// 连接数据库
// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'lmz1262600515',
//     database: 'learn_mysql'
// })

// 操作数据库
// connection.query('SELECT * FROM book', (err, results) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(results);
// })

// 预编译语句好处
// 提高性能预编译、优化、转换，多次执行也只执行一次
// 不用担心sql注入问题
// const sql = 'SELECT * FROM book WHERE id = ? and userid = ?';
// connection.execute(sql, [9, 2], (err, results) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(results);
// })

// 连接池
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'lmz1262600515',
    database: 'learn_mysql',
    // 连接池中最大连接数
    connectionLimit: 10
    // 连接超时时间
    // connectTimeout: 1000
    // 心跳检测
    // heartbeat: 1000
    // 重试次数
    // acquireTimeout: 1000
    // 重试间隔
    // waitForConnections: true
    // queueLimit: 0
})

const sql = 'SELECT * FROM book WHERE id = ? and userid = ?';
pool.execute(sql, [9, 2], (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(results);
})

// 利用promise封装
pool.promise().query(sql, [9, 2]).then(results => {
    console.log(results);
}).catch(err => {
    console.error(err);
})
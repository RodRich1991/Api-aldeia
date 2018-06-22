const Mysql = require('mysql');

const connection = Mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'vertrigo',
    database: 'aldeia'
  })

connection.connect((err) => {
    if (err) return console.log(err)
    console.log('Estado de conexão com o BD:', connection.state)
})

module.exports = connection;
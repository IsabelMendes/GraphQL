const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'doralice',
  password: 'brtoken@1234',
  database: 'agenda_petshop2'
})

module.exports = conexao

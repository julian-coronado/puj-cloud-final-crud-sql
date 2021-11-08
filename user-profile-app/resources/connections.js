const Mysql = require('sync-mysql')


const connection = new Mysql({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password:process.env.RDS_PASSWD,
    database: process.env.RDS_DATABASE,
    debug: process.env.RDS_DEBUG
})

const activeConnection = connection;

module.exports = activeConnection;
const connection = require('../resources/connections');
const constantes = require('../resources/constantes')

async function getAllUsers() {

    console.log(`${process.env.LOG_ENVIRONMENT} -> init getAllUsers...`)
    try {
        return connection.query('SELECT username , email FROM user_profile')

    } catch (error) {
        console.error(error)
        throw new TypeError(`unexpected error!! --> ${JSON.stringify(error)}`)
    }

}


async function getUser(data) {

    console.log(`${process.env.LOG_ENVIRONMENT} -> init getAllUsers... ${JSON.stringify(data)}`)
    console.log(data)
    try {
        const sql = 'SELECT username , email FROM user_profile where username = ?';
 
        return connection.query(sql, [data]);

    } catch (error) {
        console.error(error)
        throw new TypeError(`unexpected error!! --> ${JSON.stringify(error)}`)
    }

}

module.exports = {
    getAllUsers, getUser
}
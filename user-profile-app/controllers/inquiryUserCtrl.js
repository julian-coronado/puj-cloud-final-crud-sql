const connection = require('../resources/connections');
const constantes = require('../resources/constantes')

async function getAllUsers() {

    console.log(`${process.env.LOG_ENVIRONMENT} -> init getAllUsers...`)
    try {
        const sql = 'SELECT username , email FROM user_profile';
 
        connection.query(sql, (error, rows) => {
            if (error) {
                throw new TypeError(`db SELECT ALL error!! --> ${JSON.stringify(error)}`)
            }else{
                return rows;
            }
        })

    } catch (error) {
        console.error(error)
        throw new TypeError(`unexpected error!! --> ${JSON.stringify(error)}`)
    }

}


async function getUser(data) {

}

module.exports = {
    getAllUsers, getUser
}
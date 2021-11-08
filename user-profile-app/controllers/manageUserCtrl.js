const connection = require('../resources/connections');
const constantes = require('../resources/constantes')


async function addUser(data) {

    console.log(`${process.env.LOG_ENVIRONMENT} -> init add user... ${JSON.stringify(data)}`)
    try {
        if (data.username && constantes.ALPHANUMERIC_REGEX.test(data.username) && data.email && constantes.EMAIL_REGEX.test(data.email)) {

            const sql = 'INSERT INTO user_profile SET username = ?, email = ?';

            connection.query(sql, [data.username, data.email], (error, result) => {
                if (error) {
                    throw new TypeError(`db INSERT error!! --> ${JSON.stringify(error)}`)
                }
            })
        } else {
            throw new TypeError(`username, email invalid!!`)
        }
    } catch (error) { 
        console.error(error)
        throw new TypeError(`unexpected error!! --> ${JSON.stringify(error)}`)
    }

}

async function removeUser(data) {

    console.log(`${process.env.LOG_ENVIRONMENT} -> init add user... ${JSON.stringify(data)}`)
    try {
        if (data.username && constantes.ALPHANUMERIC_REGEX.test(data.username) && data.email && constantes.EMAIL_REGEX.test(data.email)) {

            const sql = 'DELETE FROM user_profile WHERE username = ?';

            connection.query(sql, [data.username], (error, result) => {
                if (error) {
                    throw new TypeError(`db DELETE error!! --> ${JSON.stringify(error)}`)
                }
            })
        } else {
            throw new TypeError(`username, email invalid!!`)
        }
    } catch (error) { 
        console.error(error)
        throw new TypeError(`unexpected error!! --> ${JSON.stringify(error)}`)
    }

}

async function updateUser(data) {

    console.log(`${process.env.LOG_ENVIRONMENT} -> init add user... ${JSON.stringify(data)}`)
    try {
        if (data.username && constantes.ALPHANUMERIC_REGEX.test(data.username) && data.email && constantes.EMAIL_REGEX.test(data.email)) {

            const sql = 'UPDATE user_profile SET email = ? WHERE username = ?';

            connection.query(sql, [data.email, data.username], (error, result) => {
                if (error) {
                    throw new TypeError(`db UPDATE error!! --> ${JSON.stringify(error)}`)
                }
            })
        } else {
            throw new TypeError(`username, email invalid!!`)
        }
    } catch (error) { 
        console.error(error)
        throw new TypeError(`unexpected error!! --> ${JSON.stringify(error)}`)
    }

}

module.exports = {
    addUser, updateUser, removeUser
}
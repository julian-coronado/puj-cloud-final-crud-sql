'use strict';

const mngUserCtrl = require('./controllers/manageUserCtrl')
const inqUserCtrl = require('./controllers/inquiryUserCtrl')
const constantes = require('./resources/constantes')


/**
 * Headers to send back to client
 */
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
}

/**
 * Function to send response to client
 * @param statusCode {number}
 * @param body {*}
 * @returns {{statusCode: *, headers: string, body: *}}
 */
const sendResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    headers: headers,
    body: body
  }

}


module.exports.manageUserProfile = async (event, context, callback) => {
  try {
    console.log(`${process.env.LOG_ENVIRONMENT} -> init manage user... ${JSON.stringify(event)}`)
    let response = { message: 'Sucess!' }

    if (event.path.includes('update')) {
      await mngUserCtrl.updateUser(JSON.parse(event.body))
    }
    else if (event.path.includes('remove')) {
      await mngUserCtrl.removeUser(JSON.parse(event.body))
    } else {
      await mngUserCtrl.addUser(JSON.parse(event.body))
    }

    return callback(null, sendResponse(constantes.SUCESSFULL_EXECUTION, JSON.stringify(response)))

  } catch (error) {
    console.error(error)
    if (error instanceof TypeError) {
      return callback(null, sendResponse(constantes.SERVER_ERROR, JSON.stringify({
        message: error.message
      })))
    } else {
      return callback(null, sendResponse(constantes.SERVER_ERROR, JSON.stringify({
        message: error
      })))
    }
  }
}

module.exports.getAllUserProfile = async (event, context) => {
  try {
    console.log(`${process.env.LOG_ENVIRONMENT} -> init get all items... ${JSON.stringify(event)}`)

    const datos = await inqUserCtrl.getAllUsers()
    return sendResponse(constantes.SUCESSFULL_EXECUTION, JSON.stringify(datos))
  } catch (error) {
    console.error(error)
    return sendResponse(constantes.SERVER_ERROR, JSON.stringify(error))
  }
}


module.exports.getUserProfile = async (event, context) => {
  try {
   console.log(`${process.env.LOG_ENVIRONMENT} -> init get all items... ${JSON.stringify(event)}`)

    const datos = await inqUserCtrl.getUser(event.pathParameters)
    return sendResponse(constantes.SUCESSFULL_EXECUTION, JSON.stringify(datos))
  } catch (error) {
    console.error(error)
    return sendResponse(constantes.SERVER_ERROR, JSON.stringify(error))
  }
}

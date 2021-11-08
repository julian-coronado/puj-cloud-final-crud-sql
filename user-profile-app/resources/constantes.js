'use strict'

const ALPHANUMERIC_REGEX = /^[0-9a-zA-Z!"#$%&'()*+,-.\/:;<>=?@\[\]\\^_`{}|~ ]+$/
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const SERVER_ERROR = 502
const SUCESSFULL_EXECUTION = 200

module.exports = {
    ALPHANUMERIC_REGEX,
    EMAIL_REGEX,
    SERVER_ERROR,
    SUCESSFULL_EXECUTION
}

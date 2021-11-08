const mysql = require('mysql');

const configDB = {
    //host: 'AMAZONRDS',
    //user: 'AMAZONUSERDB',
    //password: 'AMAZONPASSDB',
    //database: 'AMAZONDB',
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
    debug: process.env.RDS_DEBUG
};

function initializeConnection(config) {

    function addDisconnectHandler(connection) {
        connection.on("error", function (error) {
            if (error instanceof Error) {
                if (error.code === "PROTOCOL_CONNECTION_LOST") {
                    console.error(error.stack);
                    console.log("Lost connection. Reconnecting...");

                    initializeConnection(connection.config);
                } else if (error.fatal) {
                    throw error;
                }
            }
        });
    }

    const connectionInit = mysql.createConnection(config);

    // Add handlers.
    addDisconnectHandler(connectionInit);

    connectionInit.connect();
    return connectionInit;
}

const activeConnection = initializeConnection(configDB);

module.exports = activeConnection;
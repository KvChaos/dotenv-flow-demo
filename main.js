const LOG = require('signale');
require('dotenv-flow').config();


start();

function start() {

    view('NODE_ENV');
    view('MASTHEAD');
    view('USER');
    view('USER_ID');
    view('INTERESTS');
}



function view(varName) {

    LOG.info(`View ${varName}:    ${process.env[varName]}`);

}


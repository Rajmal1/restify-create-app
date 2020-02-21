const shell = require('shelljs');

module.exports = function () {
    try {
        shell.echo('☠️ ', 'I drop off the coffee...');
        shell.exec('npm i restify-router', { silent: true });
    } catch (err) {
        console.error(err.message);
    }
}
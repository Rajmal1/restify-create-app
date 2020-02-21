const shell = require('shelljs');

module.exports = function () {
    try {
        shell.echo('⏳ ', 'Almost there...');
        shell.exec('npm i restify-errors', { silent: true });
    } catch (err) {
        console.error(err.message);
    }
}
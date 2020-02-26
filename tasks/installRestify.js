const shell = require('shelljs');

module.exports = function () {
    try {
        shell.echo('☕ ', 'Preparing a coffee...');
        shell.exec('npm i restify', { silent: true });
    } catch (err) {
        console.error(err.message);
    }
}
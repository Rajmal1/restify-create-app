const shell = require('shelljs');
const fs = require('fs');

const install = () => {
    try {
        shell.exec('npm i restify restify-router restify-errors', { silent: false });
        shell.touch('server.js')
        shell.touch('README.md')
    } catch (err) {
        console.error(err.message);
    }
}

const writeFile = (text) => {
    try {
        fs.writeFile("server.js", text, err => {
            if (err) throw err;
        });
    } catch (err) {
        console.error(err.message);
    }
}

module.exports.install = install;
module.exports.writeFile = writeFile;
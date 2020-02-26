const shell = require('shelljs');
const fs = require('fs');
const iRestify = require('../tasks/installRestify');
const iRestifyRouter = require('../tasks/installRestifyRouter');
const iRestifyErrors = require('../tasks/installRestifyErrors');
const ProgressBar = require('progress');

const main = () => {
    try {
        var bar = new ProgressBar('installing... [:bar] :percent \n', {
            complete: '=',
            incomplete: ' ',
            width: 35,
            total: 100
        });

        bar.tick(0);
        bar.tick(15);
        iRestify();
        setTimeout(() => {
            iRestifyRouter();
        }, 200);
        setTimeout(() => {
            bar.tick(35);
        }, 200);
        setTimeout(() => {
            iRestifyErrors();
        }, 300);
        bar.tick(30);
        shell.touch('README.md');
        setTimeout(() => {
            bar.tick(20);
        }, 1000);
    } catch (err) {
        console.error(err.message);
    }
}

const writeFile = (text) => {
    try {
        fs.writeFile("server.js", text, err => {
            if (err) throw err;
        });
        setTimeout(() => shell.echo('✔️ ', 'Everything alright! Start code!'), 4500);
    } catch (err) {
        console.error(err.message);
    }
}

module.exports.main = main;
module.exports.writeFile = writeFile;
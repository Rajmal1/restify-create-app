#!/usr/bin/env node
const { install, writeFile } = require('./bin/main');
const text = require('./bin/writeServer');

const argv = require('yargs')
    .scriptName("restify-creat-app")
    .usage("$0 <cmd> [args]")
    .command("new", 'Install all Restify dependencies and create a HTTP server', () => {
        install();
        writeFile(text);
    })
    .epilogue()
    .help('help')
    .alias('h', 'help')
    .argv;

module.exports = argv;
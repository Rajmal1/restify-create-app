#!/usr/bin/env node
const { install, writeFile } = require('./bin/main');
const text = require('./bin/writeServer');

const yargs = require('yargs')
    .scriptName("restify-create-app")
    .usage("$0 <cmd> [args]")
    .command("new", 'Install all Restify dependencies and create a HTTP server', () => {
        install();
        writeFile(text);
    })
    .epilogue('To more information check the GitHub Repository https://github.com/NerdGui1/restify-create-app')
    .help('help')
    .alias('h', 'help')
    .argv;

module.exports = yargs;
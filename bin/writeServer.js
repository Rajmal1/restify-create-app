var text = `const restify = require('restify');\n\n
const server = restify.createServer();\n\n
server.use(restify.plugins.acceptParser(server.acceptable));\n
server.use(restify.plugins.queryParser());\n
server.use(restify.plugins.jsonBodyParser());\n
server.use(restify.plugins.urlEncodedBodyParser());\n
server.use(restify.plugins.fullResponse());\n\n
server.listen(3000);\n\n
module.exports = server;`;

module.exports = text;
var text = "const restify = require('restify');\n\n";
text += "const server = restify.createServer();\n\n";
text += "server.use(restify.plugins.acceptParser(server.acceptable));\n";
text += "server.use(restify.plugins.queryParser());\n";
text += "server.use(restify.plugins.jsonBodyParser());\n";
text += "server.use(restify.plugins.urlEncodedBodyParser());\n";
text += "server.use(restify.plugins.fullResponse());\n\n";
text += "server.listen(3000);\n\n"
text += "module.exports = server;";

module.exports = text;
var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: '1aa96e46-35f7-4a22-a2f4-5876e5a6de61', appSecret: 'vDnch6jXUAOLDriY9YWZCF4' });
bot.add('/', function (session) {
    session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
console.log(bot)
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
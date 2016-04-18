var vantage = require('vantage')();
var settings = require('./settings');
var tmi = require('tmi.js');

var options = {
  options: {
    debug: false
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: settings.bot_name,
    password: settings.bot_oauth
  },
  channels: [settings.channel]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){

  if (message === "!clear" && user === "maddog738") {

      client.clear(settings.channel);

  } else if(message === "!twitter") {

      client.action(settings.channel, "https://twitter.com/twitch");

  } else if(message === "!subon") {

      client.subscribers(settings.channel);

  } else if(message === "!suboff") {

      client.subscribersoff(settings.channel);

  }

});

function clearChat(){

  console.log("Test");

  client.on('chat', function(channel, user, message, self){

    if (message === "!clear") {

      client.clear(settings.channel);

    }

  });

}

function test() {

  console.log("This better fucking work");

}

vantage
  .command("foo")
  .description("Outputs 'bar'.")
  .action(function(args, callback) {
    this.log("bar");
    callback();
  });

vantage
  .command('test')
  .description("Test function")
  .action(function(args, callback) {
    test();
    callback();
  });

vantage
  .command('!clear')
  .description("Clears chat")
  .action(function(args, callback) {
    clearChat();
    callback();
  });

vantage
  .delimiter("ben_matbot:")
  .show();

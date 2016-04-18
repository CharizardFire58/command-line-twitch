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

function clearChat(){

  client.on('chat', function(channel, user, message, self){

    if (message === "!clear") {

      client.clear(settings.channel);

    }

  });

}

function subOn(){

  client.on('chat', function(channel, user, message, self){

    if (message === "!subon") {

        client.subscribers(settings.channel);

    }

  });

}

function subOff(){

  client.on('chat', function(channel, user, message, self){

    if (message === "!subon") {

        client.subscribersoff(settings.channel);

    }

  });

}

function twitter(){

  client.on('chat', function(channel, user, message, self){

    if(message === "!twitter") {

      client.action(settings.channel, "https://twitter.com/twitch");

    }

  });

}

function say(){

  

}

vantage
  .command('say')
  .description("Send a message to chat.")
  .action(function(args, callback) {
    say();
    callback();
  });

vantage
  .delimiter("ben_matbot:")
  .show();

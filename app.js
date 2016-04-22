var vantage = require('vantage')();
var tmi = require('tmi.js');
var settings = require('./settings');

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

vantage
  .command('say [message...]')
  .description("Send a message to chat.")
  .action(function(args, callback) {
    say(args);
    callback();
  });

  function say(args){

    var message = args.message.toString();
    var message_spaced = message.replace(/,/g , " ");

    client.say(settings.channel, message_spaced);

  }

vantage
  .command('[command...]')
  .description("Clear chat")
  .action(function(args, callback) {
    clearChat(args);
    callback();
  });

  function clearChat(args) {

    console.log(args);

    client.on('chat', function(channel, user, message, self){

      client.clear(settings.channel);

    });

  }

vantage
  .command('[command...]')
  .description("Show Twitter link")
  .action(function(args, callback) {
    twitter(args);
    callback();
  });

  function twitter(args) {

    client.on('chat', function(channel, user, message, self){

      client.action(settings.channel, "https://twitter.com/"+settings.twitter);

    });

  }

vantage
  .command('[command...]')
  .description("Show Facebook link")
  .action(function(args, callback) {
    facebook(args);
    callback();
  });

  function facebook(args) {

    client.on('chat', function(channel, user, message, self){

      client.action(settings.channel, "https://facebook.com/"+settings.facebook);

    });

  }

vantage
  .command('[command...]')
  .description("Turn on sub mode")
  .action(function(args, callback) {
    facebook(args);
    callback();
  });

  function subOn(args) {

    client.on('chat', function(channel, user, message, self){

      client.subscribers(settings.channel);

    });

  }

vantage
  .command('[command...]')
  .description("Turn off sub mode")
  .action(function(args, callback) {
    facebook(args);
    callback();
  });

  function subOff(args) {

    client.on('chat', function(channel, user, message, self){

      client.subscribersoff(settings.channel);

    });

  }

vantage
  .delimiter("ben_matbot:")
  .show();

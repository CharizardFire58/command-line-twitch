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
    commands(args);
    callback();
  });

  function say(args){

    var message = args.message.toString();
    var message_spaced = message.replace(/,/g , " ");

    client.say(settings.channel, message_spaced);

  }

  function commands(args){

    var message = args.message.toString();
    var message_spaced = message.replace(/,/g , " ");

    switch (message_spaced) {
      case '!clear':

        client.on('chat', function(channel, user, message, self){

          client.clear(settings.channel);

        });

        break;

      case '!twitter':

        client.on('chat', function(channel, user, message, self){

          client.action(settings.channel, "https://twitter.com/"+settings.twitter);

        });

        break;

      case '!facebook':

        client.on('chat', function(channel, user, message, self){

          client.action(settings.channel, "https://facebook.com/"+settings.facebook);

        });

        break;

      case '!subon':

        client.on('chat', function(channel, user, message, self){

          client.subscribers(settings.channel);

        });

        break;

      case '!suboff':

        client.on('chat', function(channel, user, message, self){

          client.subscribersoff(settings.channel);

        });

        break;

      default:

    }

  }

vantage
  .delimiter("ben_matbot:")
  .show();

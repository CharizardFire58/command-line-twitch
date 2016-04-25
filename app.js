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
  .command('!clear')
  .description("Clear chat")
  .action(function(args, callback) {
    clearChat();
    callback();
  });

  function clearChat() {

    client.clear(settings.channel);

  }

vantage
  .command('!twitter')
  .description("Show Twitter link")
  .action(function(args, callback) {
    twitter();
    callback();
  });

  function twitter() {

    client.action(settings.channel, "https://twitter.com/"+settings.twitter);

  }

vantage
  .command('!facebook')
  .description("Show Facebook link")
  .action(function(args, callback) {
    facebook();
    callback();
  });

  function facebook() {

    client.action(settings.channel, "https://facebook.com/"+settings.facebook);

  }

vantage
  .command('!subon')
  .description("Turn on sub mode")
  .action(function(args, callback) {
    subOn();
    callback();
  });

  function subOn() {

    client.subscribers(settings.channel);

  }

vantage
  .command('!suboff')
  .description("Turn off sub mode")
  .action(function(args, callback) {
    subOff();
    callback();
  });

  function subOff() {

    client.subscribersoff(settings.channel);

  }

vantage
  .command('!timeout [username] [seconds]')
  .description("Timeout a user")
  .action(function(args, callback) {
    timeout(args);
    callback();
  });

  function timeout(args) {

    console.log(args);

    client.timeout(settings.channel, args.username, args.seconds);

  }

vantage
  .command('!host [channel]')
  .description("Host another channel")
  .action(function(args, callback) {
    host(args);
    callback();
  });

  function host(args) {

    console.log(args.channel);

    // client.host(settings.channel, args.channel);

  }

vantage
  .command('!slowon [seconds]')
  .description("Enable slow mode")
  .action(function(args, callback) {
    slowOn(args);
    callback();
  });

  function slowOn(args) {

    client.slow(settings.channel, args.time);

  }

vantage
  .command('!slowoff')
  .description("Disable slow mode")
  .action(function(args, callback) {
    slowOff(args);
    callback();
  });

  function slowOff(args) {

    client.slowoff(settings.channel);

  }

vantage
  .command('!r9kon')
  .description("Enable R9K mode")
  .action(function(args, callback) {
    r9kOn(args);
    callback();
  });

  function r9kOn(args) {

    client.r9kbeta(settings.channel);

  }

vantage
  .command('!r9koff')
  .description("Disable R9K mode")
  .action(function(args, callback) {
    r9kOff(args);
    callback();
  });

  function r9kOff(args) {

    client.r9kbetaoff(settings.channel);

  }


vantage
  .delimiter("ben_matbot:")
  .show();

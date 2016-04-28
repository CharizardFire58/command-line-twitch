var vantage = require('vantage')();
var tmi = require('tmi.js');

var fb;
var tw;
var channel;
var bot;
var oauth;

var bob = function commandLineTwitch(facebook_link, twitter_link, channel_name, bot_name, oauth_token) {

	fb = facebook_link
	tw = twitter_link;
	channel = channel_name;
	bot = bot_name;
	oauth = oauth_token;

  var options = {
    options: {
      debug: false
    },
    connection: {
      cluster: "aws",
      reconnect: true
    },
    identity: {
      username: bot_name,
      password: oauth_token
    },
    channels: [channel_name]
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

	    client.say(channel, message_spaced);

	  }

	vantage
	  .command('!clear')
	  .description("Clear chat")
	  .action(function(args, callback) {
	    clearChat();
	    callback();
	  });

	  function clearChat() {

	    client.clear(channel);

	  }

	vantage
	  .command('!twitter')
	  .description("Show Twitter link")
	  .action(function(args, callback) {
	    twitter();
	    callback();
	  });

	  function twitter(twitter_link) {

	    client.action(channel, "https://twitter.com/"+tw);

	  }

	vantage
	  .command('!facebook')
	  .description("Show Facebook link")
	  .action(function(args, callback) {
	    facebook();
	    callback();
	  });

	  function facebook(facebook_link) {

	    client.action(channel, "https://facebook.com/"+fb);

	  }

	vantage
	  .command('!subon')
	  .description("Turn on sub mode")
	  .action(function(args, callback) {
	    subOn();
	    callback();
	  });

	  function subOn() {

	    client.subscribers(channel);

	  }

	vantage
	  .command('!suboff')
	  .description("Turn off sub mode")
	  .action(function(args, callback) {
	    subOff();
	    callback();
	  });

	  function subOff() {

	    client.subscribersoff(channel);

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

	    client.timeout(channel, args.username, args.seconds);

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

	    client.slow(channel, args.time);

	  }

	vantage
	  .command('!slowoff')
	  .description("Disable slow mode")
	  .action(function(args, callback) {
	    slowOff(args);
	    callback();
	  });

	  function slowOff(args) {

	    client.slowoff(channel);

	  }

	vantage
	  .command('!r9kon')
	  .description("Enable R9K mode")
	  .action(function(args, callback) {
	    r9kOn(args);
	    callback();
	  });

	  function r9kOn(args) {

	    client.r9kbeta(channel);

	  }

	vantage
	  .command('!r9koff')
	  .description("Disable R9K mode")
	  .action(function(args, callback) {
	    r9kOff(args);
	    callback();
	  });

	  function r9kOff(args) {

	    client.r9kbetaoff(channel);

	  }

	vantage
	  .command('!emoteonly')
	  .description("Enable emote only mode")
	  .action(function(args, callback) {
	    emoteOnly(args);
	    callback();
	  });

	  function emoteOnly(args) {

	    client.emoteonly(channel);

	  }

	vantage
	  .command('!emoteoff')
	  .description("Disable emote only mode")
	  .action(function(args, callback) {
	    emoteOff(args);
	    callback();
	  });

	  function emoteOff(args) {

	    client.emoteonlyoff(channel);

	  }


	vantage
	  .delimiter("ben_matbot:")
	  .show();

}

exports.commandLineTwitch = bob;

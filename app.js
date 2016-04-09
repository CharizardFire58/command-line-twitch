var tmi = require('tmi.js');
var settings = require('./settings');

var options = {
  options: {
    debug: true
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

  if(message === "!clear") {
      
      client.clear(settings.channel);

  } else if(message === "!twitter") {
      
      client.action(settings.channel, "https://twitter.com/twitch");
      
  } else if(message === "!subon") {
      
      client.subscribers(settings.channel);
      
  } else if(message === "!suboff") {
      
      client.subscribersoff(settings.channel);
      
  }

});

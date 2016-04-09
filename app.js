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

// client.on('connected', function(address, port) {
//   // console.log("Address: " + address + " Port: " + port);
//   client.action("maddog738", "Testing");
// });

// client.on('chat', function(channel, user, message, self){
//   client.action("maddog738", "Greetings, " + user["display-name"]);
// });

client.on('chat', function(channel, user, message, self){

  if(message === "!clear") {

    client.clear(settings.channel);

  } else if(message === "!twitter") {
      
   client.action(settings.channel, "https://twitter.com/twitch")
      
  }

});

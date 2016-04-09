var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "ben_matbot",
    password: "oauth:egxnzfj2so25sur3xeklmbmyado4et"
  },
  channels: ["maddog738"]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port) {
  // console.log("Address: " + address + " Port: " + port);
  client.action("maddog738", "Testing");
});

client.on('chat', function(channel, user, message, self){
  client.action("maddog738", "Greetings, " + user["display-name"]);
});

client.on('chat', function(channel, user, message, self){

  if(message === "!clearchat") {

    client.clear("maddog738");

  } else if(message === "!twitter") {
      
   client.action("maddog738", "https://twitter.com/twitch")
      
  }

});

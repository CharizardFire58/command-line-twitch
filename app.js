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
    username: "maddog738",
    password: "oauth:4pq8zxrn6kpo9zghx5dqluita7ed5y"
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

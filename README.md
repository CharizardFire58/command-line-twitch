Command line implementation of Twitch chat commands using tmi.js

Based on the following tutorial: https://youtu.be/K6N9dSMb7sM

#What it does
* Allows you to run Twitch chat commands from the command line.


#Supported commands


#Example
```javascript
var clt = require("command-line-twitch")

var facebook_link = "<YOUR FACEBOOK PROFILE NAME>";
var twitter_link = "<YOUR TWITTER PROFILE NAME>";
var channel_name = "<YOUR CHANNEL NAME>";
var bot_name = "<YOUR BOT NAME>";
var oauth_token = "<YOUR BOT OAUTH>";


clt.commandLineTwitch(facebook_link, twitter_link, channel_name, bot_name, oauth_token);

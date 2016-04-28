Command line implementation of Twitch chat commands using tmi.js

#What it does
* Allows you to run Twitch chat commands from the command line.

#Supported commands
* say [message] - Send a message to chat.
* !twitter - Show Twitter link.
* !facebook - Show Facebook link.
* !subon - Enable sub mode.
* !suboff - Disable sub mode.
* !timeout [username] [seconds] - Timeout a user.
* !host [channel] - Host another channel.
* !slowon [seconds] - Enable slow mode.
* !slowoff - Disable slow mode.
* !r9kon - Enable R9K mode.
* !r9koff - Disable R9k mode.
* !emoteonly - Enable emote only mode.
* !emoteoff - Disable emote only mode.

#Example
```javascript
var clt = require("command-line-twitch")

var facebook_link = "<YOUR FACEBOOK PROFILE NAME>";
var twitter_link = "<YOUR TWITTER PROFILE NAME>";
var channel_name = "<YOUR CHANNEL NAME>";
var bot_name = "<YOUR BOT NAME>";
var oauth_token = "<YOUR BOT OAUTH>";


clt.commandLineTwitch(facebook_link, twitter_link, channel_name, bot_name, oauth_token);

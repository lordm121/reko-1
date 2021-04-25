const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlistnnnn`,
  description: `Gives you the botlists of the Bot`,
  aliases: ["botlist"],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#c219d8")
    .setTitle("Here is Bot-Lists this Bot is on!")
    .addField("add bot: ",`**[click here!](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot)**`, true)
    .addField("top.gg: ", `**[click here! ](https://top.gg/bot/769330211157835784/vote**`, true)
    .addField("discordbotlist: ",`**[click here] (https://discordbotlist.com/bots/music-bot-1793**`, true)
    );

  }
}

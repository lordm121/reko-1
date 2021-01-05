const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invitelllllll`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#c219d8").setTitle(":heart: Please Invite me: ").setDescription("https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot")
    .setFooter("And enjoy listening to music!", ""));

  }
}

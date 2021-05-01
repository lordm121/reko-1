const { MessageEmbed } = require("discord.js");

  const prefix = ("*");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("__Help__")
  .setImage( "https://cdn.discordapp.com/attachments/740344442979876977/835450349326303242/image0-137.gif") 
  .setDescription(`**[  SUPPORT  ](https://discord.gg/t8ZwbHpJFP)**   - [   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot)-   [ VOTE ](https://top.gg/bot/769330211157835784/vote) 

 > prefix=\`${prefix}\`

> Other 

\`help\`      \`ping\` 
\`prefix\`    \`uptime\`
\`botlist\`

> Music 

\`filter\` - \`loop \` - \`lyrics\` - \`np\`
\`pause\` - \`play\` - \`queue\` - \`radio\` - \`remove\`
\`resume\` - \`search\` - \`shuffle\` - \`skip\`
\`skipto\` - \`stop\` - \`volume\`


`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

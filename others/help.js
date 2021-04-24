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

prefix=\`${prefix}\`

Others

\`${prefix}help\`      \`${prefix}ping\` 
\`${prefix}prefix\`    \`${prefix}uptime\`
\`${prefix}botlist\`

Music

| \`${prefix}filter\`-\`${prefix}loop \`-\`${prefix}lyrics\`-\`${prefix}\`
| \`${prefix}pause\`-\`${prefix}play\`-\`${prefix}queue\`-\`${prefix}radio\`-\`${prefix}remove\`
| \`${prefix}resume\`-\`${prefix}search\`-\`${prefix}shuffle\`-\`${prefix}skip\`
| \`${prefix}skipto\`-\`${prefix}stop\`-\`${prefix}volume\`


`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

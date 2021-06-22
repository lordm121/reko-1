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
  .setImage("https://cdn.discordapp.com/attachments/808760849867079721/838228786742820904/standard_1.gif") 
  .setDescription(`**[  SUPPORT  ](https://discord.gg/t8ZwbHpJFP)**    **[   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot) ** [ VOTE ] **(https://top.gg/bot/769330211157835784/vote`**)   

 <a:emoji_5:793390710233497600>| prefix=\`${prefix}\`


<a:emoji_1:849776457122185277>| Other

\`help\`      \`ping\` 
\`prefix\`    \`uptime\`
\`botlist\`

<a:emoji_1:849776441126158337>|Music 

\`filter\` - \`loop \` - \`lyrics\` - \`np\`
\`pause\` - \`play\` - \`queue\` - \`radio\` - \`remove\`
\`resume\` - \`search\` - \`shuffle\` - \`skip\`
\`skipto\` - \`stop\` - \`volume\`


`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

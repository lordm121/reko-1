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
  .setImage( "https://cdn.discordapp.com/attachments/740344442979876977/812508833880604753/931c44efb4f87684-gif-music-song-beats-animation-family-headphones-audio-att.gif") 
  .setDescription(`**[  SUPPORT  ](https://discord.gg/t8ZwbHpJFP)**   - [   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=769330211157835784&permissions=8&scope=bot)-[VOTE](https://top.gg/bot/769330211157835784/vote) 

prefix=\`${prefix}\`

Others

\`${prefix}help\`      \`${prefix}ping\` 
\`${prefix}prefix\`    \`${prefix}uptime\`

Music

\`${prefix}filter(fi)\`-\`${prefix}loop (l)\`-\`${prefix}lyrics (ly)\`-\`${prefix}np\`
\`${prefix}pause\`-\`${prefix}play(p)\`-\`${prefix}queue(qu)\`-\`${prefix}radio\`-\`${prefix}remove\`
\`${prefix}resume (r)\`-\`${prefix}search\`-\`${prefix}shuffle(mix)\`-\`${prefix}skip(s)\`-\`${prefix}skipto(st)\`-\`${prefix}stop\`
\`${prefix}volume(vol)\`


`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};

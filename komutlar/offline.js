const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  const embed = new Discord.RichEmbed()
    .setAuthor(" ")
    .setColor(`ORANGE`)
  .setDescription(` **Merhabalar,** - Sunucumuz kısa süreliğine offline konumdadır, en kısa sürede aktif edilecektir duyuruları takipde kalabilirsiniz.`)

    .setImage(`https://cdn.discordapp.com/attachments/718553445208031323/742400975524069496/S7wTGq.png`);
  return message.channel.sendEmbed(embed);
  message.react("617413726768988160");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 1
};

exports.help = {
  name: "inaktif",
  description: "Castillo dcsine yollar",
  usage: "castillo"
};

const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  const embed = new Discord.RichEmbed()
    .setAuthor(" ")
    .setColor(`ORANGE`)
  .setDescription(` **Merhabalar,** - aktif haydi herkes oyuna..`)

    .setImage(`https://i.hizliresim.com/2qdvmS.png`);
  return message.channel.sendEmbed(embed);
  message.react("617413726768988160");
      message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 1
};

exports.help = {
  name: "aktif",
  description: "Castillo dcsine yollar",
  usage: "castillo"
};

const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  const embed = new Discord.RichEmbed()
    .setAuthor(" ")
    .setColor(`ORANGE`)
  .setDescription(`Merhaba, **` + message.author.username + `** - teamspeak3 adresimiz : **arvenrp** tokovoip kurulumu hakkında detaylı bilgi için **📢-ᴛᴏᴋᴏᴠᴏɪᴘ** kanalını ziyaret edebilirsiniz.`)

    .setImage(`https://enucuzhosting.com/resources/uploads/header-background/2019-03-29/dbc52f8ca0ac1e4bd63ccb0.png`);
  return message.channel.sendEmbed(embed);
  message.react("617413726768988160");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "ts3",
  description: "Castillo dcsine yollar",
  usage: "castillo"
};

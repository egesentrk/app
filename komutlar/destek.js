const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
    
            color: 0xD97634,
            author: {
              name: "Arven Roleplay - Destek",
              icon_url: "https://cdn.discordapp.com/attachments/718531803526332519/733510313936289802/logo.png"
            },
			    "thumbnail": {
				 "url": "https://www.pinclipart.com/picdir/middle/112-1129654_raise-the-bar-with-bilingual-support-logo-vimeo.png"
			},
            title: "",
            description: `Merhaba, **${message.author}** destek talebiniz işleme alındı lütfen **destek bekleme**  \n\n **Yetkili ekip :** \n <@&734188994438496397> - <@&734189414128943125> - <@&734189151947063358>`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "Castillo © "
            }
          }
        });
    message.delete()
    
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};

const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
    
            color: 0xD97634,
            author: {
              name: "Arven Roleplay - Whitelist",
              icon_url: "https://cdn1.iconfinder.com/data/icons/users-vol-2/32/user-man-enter-login-signup-512.png"
            },
			    "thumbnail": {
				 "url": "https://media1.giphy.com/media/XzqKDYTjYGofI3VXur/source.gif"
			},
            title: "",
            description: `Merhaba, **${message.author}** whitelist başladı! - Sunucu açılış tarihi en kısa sürede belli olacaktır. ' \n\n **Yetkili ekip :** \n <@&734174026489921588> - <@&734189353718513684> - <@&734174027194695741> `,
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
  name: 'kayit',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};

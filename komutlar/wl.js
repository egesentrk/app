const Discord = require('discord.js');
exports.run = (client, message, args) => {
          client.channels.get("734174095427502101").send(`[ARVEN] Yeni whitelist oyuncumuz,= **${message.content}** -  Kayıt eden yetkili : **${message.author.tag}**`) 
   if (!message.guild) {
  return message.reply(':no_entry_sign: Bu komut, özel mesajlarda kullanılamamakta!'); }
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply(':fire: Yeterli yetki, bulunmakata!');
  }
  let guild = message.guild;
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('Sayın admin, lütfen kabul edilme sebebi girin.');
  if (message.mentions.users.size < 1) return message.reply('Kime ve neden whitelist vereceğim.').catch(console.error);
  message.delete();
  message.reply('Kişiye whitelist verildi uyarısı yapıldı, lütfen whitelist rolünü vermeyi unutmayın.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Arven Roleplay**\n`)
  .setTimestamp()
  .setDescription(' Whitelist başvurunuz kabul edildi.\n')
  .addField('Belirtilen, sebep;', reason)
  .setFooter('Arven Roleplay, iyi eğlenceler diler!', client.user.avatarURL)
  return user.send(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 0
};

exports.help = {
  name: 'wl',
  description: 'Belirtilen kullanıcıyı, uyarır!',
  usage: 'uyarı'
};
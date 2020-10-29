const Discord = require("discord.js");
const presty1 = require("quick.db");

exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için \`MANAGE_GUILD\` yetkisine sahip olman gerekli!`)
  let presty = args.slice(0).join(" ");
  if (!presty)
    return message.channel.send("Lütfen bir tag girin!")
  presty1.set(`ototag.${message.guild.id}`, `tag`);
  message.channel.send(`Oto tag \`${presty}\` Olarak Ayarlandı.`);
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permlevel: 0
}
exports.help = {
  name: "ototag",
  description: 'Sunucuya katılan kullanıcılara oto tag verebilirsiniz.',
  usage: 'ototag <tag>'
}
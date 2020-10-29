const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.cache.has('768085730018328627')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let tag = "⚟"
  let al = "768093334257401867"; ///alınacak rol idsi
  let ver = "767934695853785183"; ///verilecek rol idsi
  let tamamlandı = "763437202885443594"
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle!");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  if (!yaş) return message.channel.send("Bir Yaş Girmelisin!")
  member.setNickname(`${tag} ${isim} | ${yaş}`);
  
    member.roles.add(ver);
    member.roles.remove(al);
  

  const embed = new Discord.MessageEmbed()
    .setColor("PİNK")
    .setTitle("Kayıt işlemi başarılı")
    .setDescription(`
**Kayıt Edilen Kullanıcı** : ${member.user.username}

**Kayıt Eden Yetkili** : ${message.author.username}

**Kayıt İşleminde Verilen Rol** : 
<@&767934695853785183>

**Kayıt İşleminde Alınan Rol** :
<@&768093334257401867>
`)
.setTimestamp()
message.react(tamamlandı)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız" , "k"],
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Kız Kayıt Sıstemı",
  usage: 'Kız isim yaş'
}
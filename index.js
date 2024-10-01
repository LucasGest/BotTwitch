const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const Bot = new Discord.Client({
	intents: [
		Discord.IntentsBitField.Flags.Guilds,
		Discord.IntentsBitField.Flags.GuildMembers,
		Discord.IntentsBitField.Flags.MessageContent,
	],
});

// Partie centrale du bot //

Bot.once("ready", () => {
	console.log(Bot.user.username + " " + "est en ligne.");
});

Bot.on("guildMemberAdd", (member) => {
	const newarrrival = new Discord.EmbedBuilder()
  // .setTitle({
  //   name: `${member.user.tag} just joined!`,
  // })
  .setTitle(`🎉 Bienvenue sur le serveur Discord de Lucanemone ${member.user.tag} 🎉`)
  .setThumbnail(`${member.user.displayAvatarURL({size : 64})}`)
  .setDescription("Avant toute chose, veuillez accepter les <#1287316037314023466>")
  .setColor("#00b0f4")
  .setTimestamp();

    const envoieMSG= Bot.channels.cache.get("1288198415611859047");
    envoieMSG.send({embeds : [newarrrival]})

});

Bot.login(process.env.TOKEN);

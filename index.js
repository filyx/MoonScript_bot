//bot @ 
const Discord = require("discord.js");
const bot = new Discord.Client();

//bot cmd#
bot.login("NzY5MTc4MTkyNDc1ODQ4NzU2.X5LPAw.LEryAzc__IgZ25qWvv1us6Y9ObM");
bot.on("message", (message) =>{
    //log #
    console.log("messagio!!!")
    //log #\fine

    //§1
    if(message.content == "d.time"){
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send('ORA ATTUALE: ' + ora + ":" + minuto);
    }
    
    //§2
    var invite = new Discord.MessageEmbed()
    .setColor("#ffffff")
    .setAuthor("INVITE")
    .setTitle("link")
    .setURL("https://discord.com/oauth2/authorize?client_id=769178192475848756&scope=bot&permissions=2079849982")
    .setDescription("ecco a te il link di invito del mio bot !")
    .setFooter("created by filyx0", "");
    if(message.content == "d.invite"){
        message.channel.send(invite);
    }

    //§3
    var staff_list = new Discord.MessageEmbed()
    .setColor("#5fc9eb")
    .setAuthor("staff")
    .setDescription("Xx_ProAnime_xX")
    .setFooter("by filyx0")
    .setTimestamp();
    if(message.content == "d.staff-list"){
        message.channel.send(staff_list);
    }

    //§4
    if(message.content == "d.ciao"){
        message.channel.send('ciao!' + " " + message.author.toString())
    }
    
    //§5
    if(message.content == "bot.discordbot.prefix"){
        message.channel.send('prefix: | d. |')
    }

    //info #
    var server_link = new Discord.MessageEmbed()
    .setColor("#f00ff1")
    .setAuthor("server")
    .setTitle("link")
    .setURL("https://discord.gg/rq3t6GkmwM")
    .setFooter("by filyx0")
    .setTimestamp();
    if(message.content == "d.server"){
        message.channel.send(server_link)
    }
    
    var bot_list = new Discord.MessageEmbed()
    .setColor("000000")
    .setAuthor("BotList")
    .setDescription("bot:");
    if(message.content == "d.bot-list"){
        message.channel.send(bot_list);
    }

    var support_server = new Discord.MessageEmbed()
    .setAuthor("Server Support")
    .setColor("#000123")
    .setTitle("link")
    .setURL("https://discord.gg/76YGgPAxJM")
    .setDescription("ecco a te il link del server di supporto del bot DiscordBot!")
    .setFooter("by filyx0")
    .setTimestamp();
    if(message.content == "d.server-support"){
       message.channel.send(support_server);
    }

    var info_bot = new Discord.MessageEmbed()
    .setColor("ff0031")
    .setAuthor("DiscordBot")
    .setTitle("bot server")
    .setURL("https://discord.gg/76YGgPAxJM")
    .setDescription("questo bot è un bot italiano ma puo parlare in più lingue adesempio in inglese.")
    .setFooter("created by filyx0", "")
    .setTimestamp();
if(message.content == "d.info-bot"){
    message.channel.send(info_bot);
}
//info #\fine

//helps #
var all_help = new Discord.MessageEmbed()
.setColor("#ffff13")
.setAuthor("HELP")
.setTitle("server support")
.setURL("https://discord.gg/76YGgPAxJM")
.setDescription("d.time | d.help | d.invite | d.info-bot | d.server | d.bot-list | d.server-support | d.info-bot | d.add-bot | d.staff-list | d.kick | d.ban")
.setFooter("by Xx_ProAnime_xX")
.setTimestamp();
if(message.content == "d.all-help"){
    message.channel.send(all_help);
}
//elps #\fine

//§6
var add_bot = new Discord.MessageEmbed()
.setColor("#ff0001")
.setAuthor("AddBot")
.setDescription("scrivi = 'd.add-bot (invite link)' per aggiungere il tuo bot alla lista!")
.setFooter("by Xx_ProAnime_xX")
.setTimestamp();
if(message.content == "d.add-bot"){
    message.channel.send(add_bot)
}

//§7
if(message.content == "d."){
    message.channel.send('[prefix] + [comando]')
}

//help #
var help = new Discord.MessageEmbed()
.setColor("#84ff05")
.setAuthor("HELP")
.setDescription("```d.info-help / Info``` ```d.list-help / ListBot``` ```d.all-help / lis of command``` ```d.fun-help / fun command``` ```d.utility-help / all setup```")
.setFooter("by filyx0")
.setTimestamp();
if(message.content == "d.help"){
    message.channel.send(help);
}

var utility_help = new Discord.MessageEmbed()
.setColor("#223314")
.setAuthor("utility-help")
.setDescription("d.kick @[nome player] / d.ban @[nome player]")
.setFooter("by filyx0")
.setTimestamp();
if(message.content == "d.utility-help"){
    message.channel.send(utility_help);
}

var help_info = new Discord.MessageEmbed()
.setColor("#ff6900")
.setAuthor("info-help")
.setDescription("d.info-bot / d.server / d.staff-list / d.candidation / d.server-support / d.invite");
if(message.content == "d.info-help"){
    message.channel.send(help_info);
}

var help_list = new Discord.MessageEmbed()
.setColor("#ff6900")
.setAuthor("list-help")
.setDescription("d.add-bot / d.bot-list");
if(message.content == "d.list-help"){
    message.channel.send(help_list);
}

var help_fun = new Discord.MessageEmbed()
.setColor("#ff6900")
.setAuthor("fun-help")
.setDescription("d.ciao / d.time");
if(message.content == "d.fun-help"){
    message.channel.send(help_fun);
}

var staff_candidator = new Discord.MessageEmbed()
.setColor("#7c2013")
.setAuthor("candidature")
.setTitle("premi qui")
.setURL("https://docs.google.com/forms/d/e/1FAIpQLSfPOg6_hOFqtnHim4Mxx2lgoVEsROkMv712IsaG7G_-OuWfAw/viewform?vc=0&c=0&w=1&flr=0")
.setFooter("by filyx0")
.setTimestamp();
if(message.content == "d.candidation"){
    message.channel.send(staff_candidator);
}
//help #\fine

//kick / ban #
//kick
if(message.content.startsWith("d.kick")){
    var KickUser = message.mentions.members.first();

    if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("non hai i permessi");
        return;
    }

    if(!KickUser){
        message.channel.send("menziona qualcuno!")
        return;
    }

    if(!KickUser.kickable){
        message.channel.send("mettimi il permesso prima");
        return;
    }

    KickUser.kick()
        .then(() =>message.channel.send("<@" + KickUser + "> è stato kickato da:" + " " + message.author.toString()))
}

//ban
if(message.content.startsWith("d.ban")){
    var BanUser = message.mentions.members.first();

    if(!message.member.hasPermission("BAN_MEMBERS")){
        message.channel.send("non hai i permessi");
        return;
    }

    if(!BanUser){
        message.channel.send("menziona qualcuno!")
        return;
    }

    if(!BanUser.bannable){
        message.channel.send("mettimi il permesso prima");
        return;
    }

    BanUser.ban()
        .then(() =>message.channel.send("<@" + BanUser + "> è stato bannato  da:" + " " + message.author.toString()))
}
//kick / ban #\fine
});
//bot cmd#\
//bot @ \fine
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async() => {
    console.log('daan is gay.');
});

bot.on('message', async (msg) => {
    if(msg.content == "test"){
        setInterval(function(){
            msg.channel.send("@everyone");
        }, 1000);
    } else if(msg.content == "stop"){
        process.exit();
    }
});

bot.login("NTgzNTY5MzI5MzAwMTc2ODk2.XO-RSg.hn4n4jsUbrfjtwdgHJruhjejf7E");
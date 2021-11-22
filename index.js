const { Client } = require('discord.js')
const client = new Client({
    intents: 32767,
})
client.on('messageCreate', message => {
    if(message.author.bot) return
    if(message.content == '!hola'){
        message.reply('Hola')
    }
})

client.once('ready', () => {
    console.log('Bot iniciado')
})
client.login(require('./src/config.json').bot.token)
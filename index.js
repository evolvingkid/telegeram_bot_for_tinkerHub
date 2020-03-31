const Telegraf = require('telegraf')

const bot = new Telegraf('1107103850:AAGgmmYdIxWQTGwoa3rqm9q-mhR0nBVFhRo')
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
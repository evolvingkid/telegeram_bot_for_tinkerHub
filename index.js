const functions = require('firebase-functions');
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const msgAcessFunction = require('./modules/mesages_acess');
const token = '1107103850:AAGgmmYdIxWQTGwoa3rqm9q-mhR0nBVFhRo';
const bot = new TelegramBot(token, { polling: true });
const app = express();
const urlController = require('./urls/urlscontrollers');

//to acess the messages sent to the bot
msgAcessFunction(bot);


urlController(app, bot);




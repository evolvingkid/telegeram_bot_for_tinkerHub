
var telegram = require('telegram-bot-api');


var api = new telegram({
    token: '',
    updates: {
        enabled: true
    }
});


const basicInfo = require('./modules/bot_info');

basicInfo(api);







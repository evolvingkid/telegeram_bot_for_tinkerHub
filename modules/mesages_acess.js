const msgController = require('./msg_controller');

function messageAcessOfBot(api) {

    api.on('message', (msg) => {
        console.log(msg);

      //  sentMsg(api,msg);
      msgController(msg,api);
    });

}

module.exports = messageAcessOfBot;
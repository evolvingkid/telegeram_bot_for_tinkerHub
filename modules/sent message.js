
function sendMsg(msg, replyMesg, api) {

    api.sendMessage(msg.chat.id, replyMesg,{parse_mode : "HTML"});
}

module.exports = sendMsg;
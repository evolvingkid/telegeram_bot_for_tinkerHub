var msgsent = require('./sent message');

async function reportFromMemebers(msg, api, db) {

    // reports are added to firestore 
    await db.collection('reports').add({
        name: msg.from.username,
        report: msg.text,
        group: msg.chat.title
    });
    var newReplay = msg.from.username + ', Your message is been reported to admins.'
    
    // conform msg 
    msgsent(msg, newReplay, api);

}

module.exports = reportFromMemebers;
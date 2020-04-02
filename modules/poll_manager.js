var msgsent = require('./sent message');

async function pollManagers(msg, api, db) {

    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    // added to firestore 

    await db.collection('polls').add({
        msg: msg,
        date: date_ob
    });

   var newReplay = 'New <b>poll </b> is created checkout everyone';
    msgsent(msg, newReplay, api);
}

module.exports = pollManagers;
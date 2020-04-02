const basicInfo = require('../modules/bot_info');

function urlController(app, bot) {
    app.get('/', async (req, res) => {
        res.send('Iam leo bot');
    });

    //this link will give json value of bot info
    app.get('/api/basicinfo', async (req, res) => {
        var fetchData = await basicInfo(bot);
        console.log(fetchData);
        res.send(fetchData);
    });

    app.listen(5000);

    console.log('Listening to port');
}

module.exports = urlController;

function basicInfo(api) {

    api.getMe()
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err);
        });

}

module.exports = basicInfo;
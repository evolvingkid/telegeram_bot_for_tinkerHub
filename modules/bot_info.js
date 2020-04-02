
async function basicInfo(api) {
    var data = await api.getMe();
    //console.log(data);
    return data;
}

module.exports = basicInfo;
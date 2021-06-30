
exports.handler = function(context, event, callback) {
    const axios = require('axios');
    const sign = event.sign.split(" ")[0];
    console.log("this is the sign", sign)
    let resp;

    axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`)
    .then(function (response) {
        console.log(response.data);
        resp = response.data;
        return callback(null, resp)
    })
    .catch(function (error) {
        console.log(error);
    });
};

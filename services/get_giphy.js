/**
 * Getting a gif from Giphy: https://github.com/giphy/Giphyapi#search-endpoint
 */

const config = require('./../config');
const fetch = require('node-fetch');

module.exports = (function(config) {

    function fetch_giphy(tags, cb) {
        var url = config.services.giphy.url;
        url += '?api_key=' + config.services.giphy.api_key;
        url += '&q=' + encodeURI(tags.join(' '));
        url += '&limit=1';
        url += '&rating=g';
        fetch(url)
            .then(function (res) {
                return res.json();
            },
            function (err) {
                console.log("ERROR!!!" + err);
            })
            .then(function (data) {
                return cb(data);
            });
    }

    return {
        fetch_giphy: fetch_giphy
    }

})(config);

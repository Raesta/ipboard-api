var request = require('request');

module.exports = {

  request: function(method, apiUrl, apiKey, callback) {
    var options = {};
    options.method = method;
    options.url = apiUrl;
    options.headers = { 'Content-Type': 'application/json', authorization: 'Basic ' + apiKey };

    request(options, function (error, response, body) {
      return callback(body);
    });
  }

}

var request = require('request');

module.exports = {

  request: function(method, apiUrl, apiKey, data, callback) {
    var options = {};
    options.method = method;
    options.url = apiUrl;
    options.headers = { 'Content-Type': 'application/json', authorization: 'Basic ' + apiKey };

    if (data) options.form = data;

    request(options, function (error, response, body) {
      if (error) return callback(error);
      else return callback(JSON.parse(body));
    });
  }

}

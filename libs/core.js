var utils = require('./utils');

function Core(options) {
  this.options = options;
}

Core.prototype.hello = function(callback) {
  utils.request('GET', this.options.apiUrl + 'core/hello', this.options.apiKey, function(data) {
    return callback(data);
  });
}

module.exports = Core;

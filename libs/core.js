var utils = require('./utils');
var Members = require('./core/members');

function Core(options) {
  this.options = options;
  this.members = new Members(this.options);
}

Core.prototype.hello = function(callback) {
  var url = this.options.apiUrl + 'core/hello';
  utils.request('GET', url, this.options.apiKey, null, function(data) {
    return callback(data);
  });
}

module.exports = Core;

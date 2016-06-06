var utils = require('./utils');

function Topics(options) {
  this.options = options;
}

Topics.prototype.getAll = function(callback) {
  utils.request('GET', this.options.apiUrl + 'forums/topics', this.options.apiKey, function(data) {
    return callback(data);
  });
}

Topics.prototype.getOne = function(id, callback) {
  utils.request('GET', this.options.apiUrl + 'forums/topics/' + id, this.options.apiKey, function(data) {
    return callback(data);
  });
}

module.exports = Topics;

var utils = require('./utils');

function Topics(options) {
  this.options = options;
}

Topics.prototype.getAll = function(callback) {
  utils.request('GET', this.options.apiUrl + 'forums/topics', this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Topics.prototype.getOne = function(id, callback) {
  utils.request('GET', this.options.apiUrl + 'forums/topics/' + id, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Topics.prototype.create = function(data, callback) {
  utils.request('POST', this.options.apiUrl + 'forums/topics', this.options.apiKey, data, function(result) {
    return callback(result);
  });
}

Topics.prototype.update = function(id, data, callback) {
  utils.request('POST', this.options.apiUrl + 'forums/topics/' + id, this.options.apiKey, data, function(result) {
    return callback(result);
  });
}

Topics.prototype.delete = function(id, callback) {
  utils.request('DELETE', this.options.apiUrl + 'forums/topics/' + id, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

module.exports = Topics;

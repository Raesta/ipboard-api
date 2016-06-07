var utils = require('./utils');

function Posts(options) {
  this.options = options;
}

Posts.prototype.getAll = function(callback) {
  utils.request('GET', this.options.apiUrl + 'forums/posts', this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Posts.prototype.getOne = function(id, callback) {
  utils.request('GET', this.options.apiUrl + 'forums/posts/' + id, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Posts.prototype.create = function(data, callback) {
  utils.request('POST', this.options.apiUrl + 'forums/posts', this.options.apiKey, data, function(result) {
    return callback(result);
  });
}

Posts.prototype.update = function(id, data, callback) {
  utils.request('POST', this.options.apiUrl + 'forums/posts/' + id, this.options.apiKey, data, function(result) {
    return callback(result);
  });
}

Posts.prototype.delete = function(id, callback) {
  utils.request('DELETE', this.options.apiUrl + 'forums/posts/' + id, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

module.exports = Posts;

var utils = require('./utils');

function Posts(options) {
  this.options = options;
}

Posts.prototype.getAll = function(callback) {
  utils.request('GET', this.options.apiUrl + 'forums/posts', this.options.apiKey, function(data) {
    return callback(data);
  });
}

Posts.prototype.getOne = function(id, callback) {
  utils.request('GET', this.options.apiUrl + 'forums/posts/' + id, this.options.apiKey, function(data) {
    return callback(data);
  });
}

module.exports = Posts;

var utils = require('./utils');

function Posts(options) {
  this.options = options;
}

Posts.prototype.getAll = function(params, callback) {
  var url = this.options.apiUrl + 'forums/posts';
  if (params && params.forums) url = url + '&forums=' + params.forums;
  if (params && params.authors) url = url + '&authors=' + params.authors;
  if (params && params.hasBestAnswer) url = url + '&hasBestAnswer=' + params.hasBestAnswer;
  if (params && params.hasPoll) url = url + '&hasPoll=' + params.hasPoll;
  if (params && params.locked) url = url + '&locked=' + params.locked;
  if (params && params.hidden) url = url + '&hidden=' + params.hidden;
  if (params && params.pinned) url = url + '&pinned=' + params.pinned;
  if (params && params.featured) url = url + '&featured=' + params.featured;
  if (params && params.archived) url = url + '&archived=' + params.archived;
  if (params && params.sortBy) url = url + '&sortBy=' + params.sortBy;
  if (params && params.sortDir) url = url + '&sortDir=' + params.sortDir;
  if (params && params.page) url = url + '&page=' + params.page;
  utils.request('GET', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Posts.prototype.getOne = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  var url = this.options.apiUrl + 'forums/posts/' + params.id;
  utils.request('GET', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Posts.prototype.create = function(params, callback) {
  if (!params || !params.data) throw new Error('data is a required parameter');
  var url = this.options.apiUrl + 'forums/posts';
  utils.request('POST', url, this.options.apiKey, params.data, function(result) {
    return callback(result);
  });
}

Posts.prototype.update = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  if (!params || !params.data) throw new Error('data is a required parameter');
  var url = this.options.apiUrl + 'forums/posts/' + params.id;
  utils.request('POST', url, this.options.apiKey, params.data, function(result) {
    return callback(result);
  });
}

Posts.prototype.delete = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  var url = this.options.apiUrl + 'forums/posts/' + params.id;
  utils.request('DELETE', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

module.exports = Posts;

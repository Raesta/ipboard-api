var utils = require('../utils');

function Comments(options) {
  this.options = options;
}

Comments.prototype.getAll = function(params, callback) {
  var url = this.options.apiUrl + 'downloads/comments';
  if (params && params.calendars) url = url + '&calendars=' + params.calendars;
  if (params && params.authors) url = url + '&authors=' + params.authors;
  if (params && params.locked) url = url + '&locked=' + params.locked;
  if (params && params.hidden) url = url + '&hidden=' + params.hidden;
  if (params && params.featured) url = url + '&featured=' + params.featured;
  if (params && params.sortBy) url = url + '&sortBy=' + params.sortBy;
  if (params && params.sortDir) url = url + '&sortDir=' + params.sortDir;
  if (params && params.page) url = url + '&page=' + params.page;
  utils.request('GET', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Comments.prototype.getOne = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  var url = this.options.apiUrl + 'downloads/comments/' + params.id;
  utils.request('GET', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Comments.prototype.create = function(params, callback) {
  if (!params || !params.data) throw new Error('data is a required parameter');
  var url = this.options.apiUrl + 'downloads/comments';
  utils.request('POST', url, this.options.apiKey, params.data, function(result) {
    return callback(result);
  });
}

Comments.prototype.update = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  if (!params || !params.data) throw new Error('data is a required parameter');
  var url = this.options.apiUrl + 'downloads/comments/' + params.id;
  utils.request('POST', url, this.options.apiKey, params.data, function(result) {
    return callback(result);
  });
}

Comments.prototype.delete = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  var url = this.options.apiUrl + 'downloads/comments/' + params.id;
  utils.request('DELETE', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

module.exports = Comments;

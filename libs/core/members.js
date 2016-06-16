var utils = require('../utils');

function Members(options) {
  this.options = options;
}

Members.prototype.getAll = function(params, callback) {
  var url = this.options.apiUrl + 'core/members';
  if (params && params.page) url = url + '&page=' + params.page;
  if (params && params.sortBy) url = url + '&sortBy=' + params.sortBy;
  if (params && params.sortDir) url = url + '&sortDir=' + params.sortDir;
  utils.request('GET', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Members.prototype.getOne = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  var url = this.options.apiUrl + 'core/members/' + params.id;
  utils.request('GET', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Members.prototype.create = function(params, callback) {
  if (!params || !params.data) throw new Error('data is a required parameter');
  var url = this.options.apiUrl + 'core/members';
  utils.request('POST', url, this.options.apiKey, params.data, function(result) {
    return callback(result);
  });
}

Members.prototype.update = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  if (!params || !params.data) throw new Error('data is a required parameter');
  var url = this.options.apiUrl + 'core/members/' + params.id;
  utils.request('POST', url, this.options.apiKey, params.data, function(result) {
    return callback(result);
  });
}

Members.prototype.delete = function(params, callback) {
  if (!params || !params.id) throw new Error('id is a required parameter');
  var url = this.options.apiUrl + 'core/members/' + params.id;
  utils.request('DELETE', url, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

module.exports = Members;

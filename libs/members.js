var utils = require('./utils');

function Members(options) {
  this.options = options;
}

Members.prototype.getAll = function(callback) {
  utils.request('GET', this.options.apiUrl + 'core/members', this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Members.prototype.getOne = function(id, callback) {
  utils.request('GET', this.options.apiUrl + 'core/members/' + id, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

Members.prototype.create = function(data, callback) {
  utils.request('POST', this.options.apiUrl + 'core/members', this.options.apiKey, data, function(result) {
    return callback(result);
  });
}

Members.prototype.update = function(id, data, callback) {
  utils.request('POST', this.options.apiUrl + 'core/members/' + id, this.options.apiKey, data, function(result) {
    return callback(result);
  });
}

Members.prototype.delete = function(id, callback) {
  utils.request('DELETE', this.options.apiUrl + 'core/members/' + id, this.options.apiKey, null, function(result) {
    return callback(result);
  });
}

module.exports = Members;

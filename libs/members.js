var utils = require('./utils');

function Members(options) {
  this.options = options;
}

Members.prototype.getAll = function(callback) {
  utils.request('GET', this.options.apiUrl + 'core/members', this.options.apiKey, function(data) {
    return callback(data);
  });
}

Members.prototype.getOne = function(id, callback) {
  utils.request('GET', this.options.apiUrl + 'core/members/' + id, this.options.apiKey, function(data) {
    return callback(data);
  });
}

Members.prototype.create = function() {
}

Members.prototype.update = function() {
}

module.exports = Members;

var Core = require('./libs/core');
var Forums = require('./libs/forums');
var Downloads = require('./libs/downloads');

module.exports = Ipboard;

function Ipboard(apiUrl, apiKey) {
  if (!apiUrl || !apiKey) throw new error('one or few paramaters are missing');

  this.options = {};
  this.options.apiUrl = apiUrl;
  this.options.apiKey = new Buffer(apiKey).toString('base64');

  this.native = require('./libs/utils');
  this.core = new Core(this.options);
  this.forums = new Forums(this.options);
  this.downloads = new Downloads(this.options);
}

var Core = require('./libs/core');
var Members = require('./libs/members');
var Topics = require('./libs/topics');
var Posts = require('./libs/posts');

module.exports = Ipboard;

function Ipboard(apiUrl, apiKey) {
  if (!apiUrl || !apiKey) throw new error('one or few paramaters are missing');

  this.options = {};
  this.options.apiUrl = apiUrl;
  this.options.apiKey = new Buffer(apiKey).toString('base64');

  this.native = require('./libs/utils');
  this.core = new Core(this.options);
  this.members = new Members(this.options);
  this.topics = new Topics(this.options);
  this.posts = new Posts(this.options);
}

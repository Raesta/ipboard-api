var Topics = require('./forums/topics');
var Posts = require('./forums/posts');

function Forums(options) {
  this.topics = new Topics(options);
  this.posts = new Posts(options);
}

module.exports = Forums;

var Reviews = require('./downloads/reviews');
var Comments = require('./downloads/comments');
var Files = require('./downloads/files');

function Downloads(options) {
  this.reviews = new Reviews(options);
  this.comments = new Comments(options);
  this.files = new Files(options);
}

module.exports = Downloads;

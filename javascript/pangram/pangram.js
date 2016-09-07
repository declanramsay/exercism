var Sentence = function(string) {
  this.sentence = string;
};

var REGEX = /([a-z])(?!.*\1)/gi;

Sentence.prototype.isPangram = function() {
  var sentence = this.sentence;
  return (sentence.match(REGEX) || []).length === 26;
};

module.exports = Sentence;

var Sentence = function(string) {
  this.sentence = string;
};

var REGEX = /([a-z])(?!.*\1)/g;

Sentence.prototype.isPangram = function() {
  var sentence = this.sentence.toLowerCase();
  return (sentence.match(REGEX) || []).length === 26;
};

module.exports = Sentence;

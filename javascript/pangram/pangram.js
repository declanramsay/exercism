var Sentence = function(string) {
  this.sentence = string;
};

Sentence.prototype.isPangram = function() {
  if(!this.sentence) {
    return false;
  }

  return this.sentence;
};

module.exports = Sentence;

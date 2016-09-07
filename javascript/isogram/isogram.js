var Word = function(word) {
  this.word = word;
};

var REGEX = /-|\s/g;

Word.prototype.isIsogram = function() {
  var word = this.word;

  word = word.replace(REGEX, '').toLowerCase();

  var count = {};
  for(var i = 0; i < word.length; i++) {
    if(count.hasOwnProperty(word[i])) {
      count[word[i]] = false;
    } else {
      count[word[i]] = true;
    }
  }

  return Object.keys(count).every(function(k) {
    return count[k];
  });
};

module.exports = Word;

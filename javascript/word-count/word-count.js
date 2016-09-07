var Words = function() {};

var REGEX = /\t|\n/g;

Words.prototype.count = function(string) {
  var formattedString = string.replace(REGEX, " ").toLowerCase();
  var arr = formattedString.split(" ");

  // remove blank entries
  var words = arr.filter(function(a) {
    return a.trim() !== "";
  });

  var count = {};
  words.forEach(function(word) {
    if(count.hasOwnProperty(word)) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  });

  return count;
};

module.exports = Words;

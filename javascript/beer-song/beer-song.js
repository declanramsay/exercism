var BeerSong = function() {};

var lyric = function(num) {
  newNum = num - 1;
  return num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\nTake one down and pass it around, ' + newNum + ' bottles of beer on the wall.\n';
};

BeerSong.prototype.verse = function() {
  for(var i = 0; i < arguments.length; i++) {
    return lyric(arguments[i]);
  }
};
module.exports = BeerSong;

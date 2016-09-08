var BeerSong = function() {};

var pluralise = function(num, string) {
  return num !== 1 ? string + 's' : string;
};

var takeItDown = function(num) {
  if(!num) {
    return 'Go to the store and buy some more,';
  }

  var it = num !== 1 ? 'one' : 'it';
  return 'Take ' + it + ' down and pass it around,';
};

var lyric = function(num) {
  var currentBottles = !num ? 'No more' : num.toString();
  var remainingBottles = !num ? 99 : num - 1;
  remainingBottles = !remainingBottles ? 'no more' : remainingBottles;

  return currentBottles + ' ' + pluralise(num, 'bottle') + ' of beer on the wall, ' + currentBottles.toLowerCase() + ' ' + pluralise(num, 'bottle') + ' of beer.\n' + takeItDown(num) + ' ' + remainingBottles + ' ' + pluralise(remainingBottles, 'bottle') + ' of beer on the wall.\n';
};

BeerSong.prototype.verse = function(num) {
  return lyric(num);
};

BeerSong.prototype.sing = function(start, end) {
  end = end || 0;
  var range = start - end + 1;

  var rangeArr = [];
  for(var n = 0; n < range; n++) {
    rangeArr.push(start);
    start--;
  }

  var verses = [];
  for(var i = 0; i < rangeArr.length; i++) {
    verses.push(lyric(rangeArr[i]));
  }

  return verses.join('\n');
};
module.exports = BeerSong;

var BeerSong = function() {};

var pluralise = function(num, string) {
  return num !== 1 ? string + 's' : string;
};

var takeItDown = function(num) {
  if(!num) {
    return 'Go to the store and buy some more,';
  }
  if(num === 1) {
    return 'Take it down and pass it around,';
  }
  return 'Take one down and pass it around,';
};

var lyric = function(num) {
  var newNum = !num ? 99 : num - 1;
  newNum = !newNum ? 'no more' : newNum;
  return (num ? num : 'No more') + ' ' + pluralise(num, 'bottle') + ' of beer on the wall, ' + (num ? num : 'no more') + ' ' + pluralise(num, 'bottle') + ' of beer.\n' + takeItDown(num) + ' ' + newNum + ' bottles of beer on the wall.\n';
};

BeerSong.prototype.verse = function(num) {
  return lyric(num);
};

BeerSong.prototype.sing = function() {
  var verses = [];
  for(var i = 0; i < arguments.length; i++) {
    verses.push(lyric(arguments[i]));
  }

  return verses;
};
module.exports = BeerSong;

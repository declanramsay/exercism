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
  return (num ? num : 'No more') + ' ' + pluralise(num, 'bottle') + ' of beer on the wall, ' + (num ? num : 'no more') + ' ' + pluralise(num, 'bottle') + ' of beer.\n' + takeItDown(num) + ' ' + newNum + ' ' + pluralise(newNum, 'bottle') + ' of beer on the wall.\n';
};

BeerSong.prototype.verse = function(num) {
  return lyric(num);
};

BeerSong.prototype.sing = function() {
  var secondValue = arguments[1] ? arguments[1] : 0;
  var range = arguments[0] - secondValue + 1;

  var rangeArr = [];
  for(var n = 0; n < range; n++) {
    rangeArr.push(arguments[0]);
    arguments[0]--;
  }

  var verses = [];
  for(var i = 0; i < rangeArr.length; i++) {
    verses.push(lyric(rangeArr[i]) + (i !== rangeArr.length - 1 ? '\n' : ''));
  }

  return verses.join('');
};
module.exports = BeerSong;

var GigaSecond = function(rawDate) {
  this.rawDate = rawDate;
};

var GIGAMILLISECOND = 1000000000000;

GigaSecond.prototype.date = function() {
  var raw = new Date(this.rawDate);
  var newDateInMilliSeconds = raw.setMilliseconds(GIGAMILLISECOND);
  return new Date(newDateInMilliSeconds);
};

module.exports = GigaSecond;

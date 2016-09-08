var Phone = function(rawNumber) {
  this.rawNumber = rawNumber;
};

var REGEX = /\D+/g;
var FAILED_STRING = '0000000000';

Phone.prototype.number = function () {
  var filteredString = this.rawNumber.replace(REGEX, '');

  if(filteredString.length < 10 || (filteredString.length === 11 && filteredString[0] !== '1') || filteredString.length > 11) {
    return FAILED_STRING;
  }

  return filteredString.substr(filteredString.length - 10);
};

Phone.prototype.areaCode = function() {
  return this.rawNumber.substr(0, 3);
};

Phone.prototype.toString = function() {
  var areaCode = this.rawNumber.substr(0, 3);
  var localCode = this.rawNumber.substr(3, 3);
  var number = this.rawNumber.substr(6);

  return '(' + areaCode + ') ' + localCode + '-' + number;
};

module.exports = Phone;

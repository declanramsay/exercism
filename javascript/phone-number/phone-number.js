var Phone = function(rawNumber) {
  this.rawNumber = rawNumber;
};

Phone.prototype.number = function () {
  return this.rawNumber;
};

module.exports = Phone;

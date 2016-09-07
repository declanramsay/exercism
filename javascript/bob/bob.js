//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if(input.trim() === "") {
    return 'Fine. Be that way!';
  }

  if(/[A-Z]/.test(input) && input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  }

  if(/\w+\?/.test(input)) {
    return 'Sure.';
  }

  return 'Whatever.';
};

module.exports = Bob;

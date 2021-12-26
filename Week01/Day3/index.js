const raindrops = function (n) {
  let output = '';

  if (n !== 0) {
    if (n % 3 === 0) output += 'Pling';
    if (n % 5 === 0) output += 'Plang';
    if (n % 7 === 0) output += 'Plong';
  }
  if (output === '') output += n;

  return output;
};

// Required for tests; don't delete this.
module.exports = { raindrops };

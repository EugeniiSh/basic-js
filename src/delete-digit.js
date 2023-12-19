const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = String(n).split('');
  let max = Number(nArr.slice(1).join(''));

  for (let i = 1; i < nArr.length; i++) {
    let tempArr = nArr.slice();
    tempArr.splice(i, 1);
    let tempNum = Number(tempArr.join(''));
    if (tempNum > max) {
      max = tempNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};

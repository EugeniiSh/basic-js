const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let subStr = '';

  for(let i = 0; i < str.length; i++)
  {
      if(str[i] === str[i + 1])
      {
          if(subStr)
          {
              subStr += str[i + 1];
          }
          else
          {
              subStr += str[i] + str[i + 1];
          }
      }
      else
      {
          if(subStr.length > 1)
          {
              result += `${subStr.length}${subStr[0]}`;
              subStr = '';
          }
          else
          {
              result += str[i]
          }
      }
  }

  return result;
}

module.exports = {
  encodeLine
};

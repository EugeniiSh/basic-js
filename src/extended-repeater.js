const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let additionStr = options.addition === undefined? '': String(options.addition);
  let subStr = '';

  for(let i = 0; i < options.additionRepeatTimes || 0; i++)
  {
    subStr += `${additionStr}${i < options.additionRepeatTimes - 1 ? options.additionSeparator || '|' : '' }`;
  }

  for(let i = 0; i < options.repeatTimes || 0; i++)
  {
    result += 
    `${str + (subStr || additionStr || '')}${i < options.repeatTimes - 1 ? options.separator || '+' : "" }`;
  }

  return result || String(str) + additionStr;

  // const {
  //   repeatTimes = 1,
  //   separator = "+",
  //   addition = "",
  //   additionRepeatTimes = 1,
  //   additionSeparator = "|",
  // } = options;

  // const additionString = Array(additionRepeatTimes)
  //   .fill(String(addition))
  //   .join(additionSeparator);

  // const mainString = String(str) + additionString;

  // return Array(repeatTimes).fill(mainString).join(separator);
}

module.exports = {
  repeater
};

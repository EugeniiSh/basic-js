const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if(!arr.includes(-1))
  {
    return arr.sort((a, b) => a - b);
  }

  const subArr = arr.filter((item) => item !== -1)
  subArr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] !== -1)
    {
      arr.splice(i, 1, subArr.shift())
    }
  }

  return arr;

  // const nonNegativeElements = arr.filter((element) => element !== -1);
  // nonNegativeElements.sort((a, b) => a - b);

  // let index = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== -1) {
  //     arr[i] = nonNegativeElements[index];
  //     index++;
  //   }
  // }

  // return arr;
}

module.exports = {
  sortByHeight
};

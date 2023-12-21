const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resArr: [],
  getLength() 
  {
    this.resArr.length;
    return this;
  },
  addLink(value) 
  {
    this.resArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) 
  {
    // try
    //   {
        if(position < 1 
        || position > this.resArr.length
        || !Number.isFinite(position))
        {
          this.resArr.length = 0;
          throw new TypeError("You can\'t remove incorrect link!")
        }
        else
        {
          this.resArr.splice(position - 1, 1);
          return this;
        }
      // }
      // catch(error)
      // {
      //   if(error.name === 'TypeError')
      //   {
      //     return error.message;
      //   }
      // }
  },
  reverseChain() 
  {
    this.resArr.reverse();
    return this;
  },
  finishChain() 
  {
    let result = this.resArr.slice();
    this.resArr.length = 0;
    return result.join('~~');
  }
};

module.exports = {
  chainMaker
};

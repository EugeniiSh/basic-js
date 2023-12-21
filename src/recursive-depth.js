const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // constructor() 
  // {
  //   this.count = 0;
  //   this.subCount = 0;
  //   this.depth = 0;
  // }
  // calculateDepth(arr) 
  // {
  //   this.depth++;
  //   this.subCount++;
  //   for(let i = 0; i < arr.length; i++)
  //   {
  //       if(Array.isArray(arr[i]))
  //       {
  //           this.calculateDepth(arr[i]);
  //       }
  //   }
  //   this.count = Math.max(this.count, this.subCount);
  //   this.subCount = 1;
  //   this.depth--;
  //   if(this.depth === 0) return this.count;
  // }
  // calculateDepth(arr) 
  // {
  //   if (!Array.isArray(arr)) return 0;
    
  //   let count = 1;
    
  //   for(let i = 0; i < arr.length; i++)
  //   {
  //       if(Array.isArray(arr[i]))
  //       {
  //          let subCount = this.calculateDepth(arr[i]) + 1;
  //          count = Math.max(count, subCount);
  //       }
  //   }
  //   return count;
  // }
  constructor() 
  {
    this.count = 0;
    this.subCount = 0;
  }
  calculateDepth(arr) 
  {
    let depth = 0;
    if (!Array.isArray(arr)) return 0;

    for(let i = 0; i < arr.length; i++)
    {
      depth =  Math.max(depth, this.calculateDepth(arr[i]));
    }
    return 1 + depth;
  }
}

module.exports = {
  DepthCalculator
};

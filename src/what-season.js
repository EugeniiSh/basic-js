const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date === undefined)
  {
    return 'Unable to determine the time of year!';
  }

  if ((date instanceof Date) === false || Object.getOwnPropertyNames(date).length != 0 ) 
  {
    throw Error("Invalid date!");
  }

  let seasonNum;
  try
  {
    seasonNum = date.getMonth();
  }
  catch(error)
  {
    throw TypeError('Invalid date!')
  }
    
  switch(true)
  {
    case((seasonNum >= 0 && seasonNum <= 1) || seasonNum === 11):
        return 'winter';
    case(seasonNum >= 2 && seasonNum <= 4):
        return 'spring';
    case(seasonNum >= 5 && seasonNum <= 7):
        return 'summer';
    case(seasonNum >= 8 && seasonNum <= 10):
        return 'autumn';    
  }
}

module.exports = {
  getSeason
};

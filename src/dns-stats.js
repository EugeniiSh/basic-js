const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  if (domains.length !== 0) {

    for (let i = 0; i < domains.length; i++) {
      const tempArr = domains[i].split('.').reverse();

      for (let j = 0; j < tempArr.length; j++) {
        const property = `.${tempArr.slice(0, j + 1).join('.')}`;

        if (result[property]) {
          result[property]++;
        }
        else {
          result[property] = 1;
        }
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};

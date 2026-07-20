/**
 * @param {string} val
 * @return {Object}
 */

var expect = function (val) {
  return {
    toBe(valToBe) {
      if (valToBe === val) {
        return true
      } else {
        throw new Error("Not Equal")
      }
    },
    notToBe(valNotToBe) {
      if (valNotToBe !== val) {
        return true
      } else {
        throw new Error("Equal")
      }
    }
  }
};

try {
  expect(5).toBe(3);
} catch (err) {
  console.log(err.message);
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

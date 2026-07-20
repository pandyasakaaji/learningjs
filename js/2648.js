/**
 * @return {Generator<number>}
 */

var fibGenerator = function* () {
  let x = 0
  let y = 1
  let sum
  yield x
  yield y

  while (true) {
    sum = x + y
    yield sum
    x = y
    y = sum
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

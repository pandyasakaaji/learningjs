/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
k = 1

var shiftGrid = function (grid, k) {
  // Put the matrix row by row to a vector. take k % vector.length and move last k of the vector to the beginning. put the vector to the matrix back the same way.

  const flat = grid.flat();
  // [1,2,3,4,5,6,7,8,9]};

  let mod = k % flat.length
  console.log(mod)
}

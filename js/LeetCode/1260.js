/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// k = 1

var shiftGrid = function (grid, k) {

};


for (i = 0; i < grid.length; i++) {

  let val = null

  for (j = 0; j < grid[i].length; j++) {
    console.log(`grid: ${grid[i][j]}`)

    // value kabeh yang sebaris
    if (!val) {
      val = grid[i][j + 1]
      grid[i][j + 1] = grid[i][j]
    } else if (val) {

      // cek j tok
      // if (j == (grid[i].length - 1)) {
      //   grid[i + 1][0] = grid[i][j]
      //   // console.log("j tok")
      //   continue
      // }

      // cek i karo j
      if ((i == (grid.length - 1)) && (j == (grid[i].length - 1))) {
        // console.log("i dan j")
        grid[0][0] = grid[i][j]
        grid[i][j] = val
        continue
      }

      let temp
      temp = grid[i][j + 1]
      grid[i][j + 1] = val
      val = temp
    }
  }
}

console.log(grid)

// rumus untuk value yang rata
// grid[i][j] >> grid[i][j+1] 
grid[0][2] = grid[0][1]
grid[0][1] = grid[0][0]

// rumus untuk value yang ganti baris yang selanjutnya
// Element at grid[i][n - 1] moves to grid[i + 1][0].
grid.at(0).at(-1) = grid[1][0]

// rumus untuk value paling belakang agar kedepan
// Element at grid[m - 1][n - 1] moves to grid[0][0].
grid[0][0] = grid.at(-1).at(-1)



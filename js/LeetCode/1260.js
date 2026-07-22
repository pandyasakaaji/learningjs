/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function (grid, k) {
  for (let i = 0; i < k; i++) {
    let buffer, nextBuffer
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        console.log(`grid: ${grid[i][j]}`)

        // cek i karo j
        if (i == (grid.length - 1) && j == (grid[i].length - 1)) {
          // console.log("i dan j")
          console.log("latest value to first")
          grid[0][0] = grid[i][j]
          if (buffer !== undefined) {
            grid[i][j] = buffer
          }
          continue
        }

        // ambil 1
        if (j == 0) {
          if (nextBuffer) {
            buffer = nextBuffer
          } else {
            buffer = grid[i][j]
          }
        } else {
          // ambil 2
          let temp = grid[i][j]

          // cek j tok
          if (j === grid[i].length - 1) {
            if (grid[i + 1] !== undefined) {
              nextBuffer = grid[i + 1][0]
              console.log(`last line, next buffer: ${nextBuffer}`)
              grid[i + 1][0] = grid[i][j]
            }
          }

          // isi dengan buffer (1)
          grid[i][j] = buffer

          // ganti buffer dengan 2
          buffer = temp
        }
      }
    }

    console.log(grid)
  }
  return grid
};

const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let k = 9

shiftGrid(grid, k)

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



/** 
 * LeetCode 1331 - Array Rank Transform
 * @param {number[]} arr 
 * @return {number[]}
 * */

let arr = [40, 10, 20, 30]
// let arr = [100, 100, 100]
// let arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]

var arrayRankTransform = function (arr) {
  const sorted = [...new Set(arr)].sort((a, b) => a - b)

  res = []
  arr.forEach((val, i) => {
    res[i] = (sorted.indexOf(val) + 1)
  })
  return res
}

arrayRankTransform(arr)

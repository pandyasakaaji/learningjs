/** 
 * LeetCode 1331 - Array Rank Transform
 * @param {number[]} arr 
 * @return {number[]}
 * */

let arr = [40, 10, 20, 30]
// let arr = [100,100,100]
// let arr = [37,12,28,9,100,56,80,5,12]

var arrayRankTransform = function (arr) {
  const sorted = [...arr];

  sorted.sort((a, b) => a - b);

  const rank = new Map();
  let currentRank = 1;

  for (const num of sorted) {
    if (!rank.has(num)) {
      rank.set(num, currentRank++);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = rank.get(arr[i]);
  }

  return arr;
};

rankArr(arr)

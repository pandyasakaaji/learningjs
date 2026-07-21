// using loop
function findSevenLoop(n) {
  for (let i = n; i > 0; i--) {
    if (i % 7 === 0) {
      console.log(i)
    }
  }
}

// using recursion
function findSevenRecursion(n) {
  if (n === 0) return

  if (n % 7 === 0) {
    console.log(n)
  }

  findSeven(n - 1)
}

// most efficient
function findSevenEfficient(n) {
  let start = Math.floor(n / 7) * 7

  for (let i = start; i >= 7; i -= 7) {
    console.log(i)
  }
}

findSevenLoop(37)
console.log("===")
findSevenRecursion(37)
console.log("===")
findSevenEfficient(37)

// Using loop
function findSevenLoop(n) {
  for (let i = n; i > 0; i--) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }
}

// Using recursion
function findSevenRecursion(n) {
  if (n === 0) return;

  if (n % 7 === 0) {
    console.log(n);
  }

  findSeven(n - 1);
}

findSevenLoop(37);
console.log("===")
findSevenRecursion(37);

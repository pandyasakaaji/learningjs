let arr = [1, 2, 3, 5, 7]

let result = arr.reduce((a, b) => {
  console.log(`total now: ${a}`)
  console.log(`added: ${b}`)
  console.log(" - ")
  return a + b
}, 0)

console.log(`the result is ${result}`)

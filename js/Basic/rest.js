const data = [1, 2, 3, 4, 5, 6]

function sum(name, ...num) {
  let total = 0

  for (const number of num) {
    total += number
  }

  return `${name}: ${total}`
}

sum("apple", 8, 7, 6, 7, 6)
sum("banana", ...data)

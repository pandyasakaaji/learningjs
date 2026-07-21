function createAdder(val) {
  function add(param) {
    console.log(`${val} + ${param}`)
    return val + param
  }

  return add
}

function createMultipler(val) {
  function multiple(param) {
    console.log(`${val} x ${param}`)
    return val * param
  }

  return multiple
}

const addTwo = createAdder(2)
const multipleByTwo = createMultipler(2)

console.log(addTwo(2))
console.log(multipleByTwo(4))

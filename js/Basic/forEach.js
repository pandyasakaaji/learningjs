const data = [1, 2, 3, 4, 5]
const newData = []

data.forEach(function (val, index) {
  newData[index] = val * 2
});

const newDataMap = data
  .map(val => val * 3)
  .filter(val => val % 2 == 0)

console.log(newData)
console.log(newDataMap)

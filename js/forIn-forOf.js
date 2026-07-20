let person = {
  name: 'Saka',
  age: 21,
  address: 'Surabaya'
}

let personArr = [
  {
    name: 'Pandya',
    age: 20,
    address: 'Surabaya'
  },
  {
    name: 'Saka',
    age: 21,
    address: 'Pasuruan'
  },
  {
    name: 'Aji',
    age: 22,
    address: 'Malang'
  },
]

const data = new Map()
data.set("name", "Saka")
data.set("age", "21")
data.set("address", "Surabaya")

const stringData = "Hello World!"

// property
for (const property in person) {
  console.log(property)
}

// value of iterable
for (const persons of personArr) {
  for (const person in persons) {
    console.log(`${person}: ${persons[person]}`)
  }
}

// for of a string
for (const char of stringData) {
  console.log(char)
}

// Map
for (const [personProp, personVal] of data.entries()) {
  console.log(`${personProp}, ${personVal}`)
}

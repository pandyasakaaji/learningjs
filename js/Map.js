const map = new Map()

for (let i = 0; i < 10; i++) {
  map.set(i, Math.floor(Math.random() * 10))
}

for (const [key, value] of map) {
  console.log(`key: ${key}, value: ${value}`)
}

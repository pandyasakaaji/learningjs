class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}, ${this.age} y.o.`)
  }
}

const saka = new Person("Saka", 21)
saka.introduce()

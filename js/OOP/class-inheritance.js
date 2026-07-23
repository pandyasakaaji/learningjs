class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  introduce() {
    console.log(`My name is ${this.name}. I'm ${this.age} y.o.`)
  }

  walk() {
    console.log("Walking...")
  }
}

class Adult extends Person {
  constructor(name, age, job) {
    super(name, age)
    this.job = job
  }

  jobIs() {
    console.log(`My job is ${this.job}`)
  }

  walk() {
    super.walk()
    console.log(`I'm walking...`)
  }
}

const saka = new Adult("Saka", 21, "Technician")
saka.introduce()
saka.walk()
saka.jobIs()

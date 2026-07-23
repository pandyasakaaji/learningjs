class Person {
  #name
  #age

  constructor(name, age) {
    this.#name = name
    this.#age = age
  }

  set name(name) {
    this.#name = name
  }

  set age(age) {
    this.#age = age
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }

  introduce() {
    console.log(`My name is ${this.#name}. I'm ${this.#age} y.o.`)
  }

  walk() {
    console.log("Walking...")
  }
}

class Adult extends Person {
  #job

  constructor(name, age, job) {
    super(name, age)
    this.job = job
  }

  set job(job) {
    this.#job = job
  }

  get job() {
    return this.#job
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
saka.job = "Teacher"
saka.jobIs()

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.sayName = function (name = "there") {
    console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`)
  }
}

const saka = new Person("Pandya", "Saka")
saka.sayName()

saka.firstName = "Saka"
saka.lastName = "Aji"
saka.sayName("rek")
saka.sayName("bro")

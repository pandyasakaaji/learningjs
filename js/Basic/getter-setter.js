const person = {
  firstName: "Pandya",
  lastName: "Saka",

  get fullname() {
    console.log(`${this.firstName} ${this.lastName}`)
  },

  set fullname(val) {
    const array = val.split("-");
    this.firstName = array[0]
    this.lastName = array[1]
  }
}

person.fullname

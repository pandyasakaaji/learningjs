// when accessing an object property, the lookup order is:
// instance -> constructor prototype -> ... -> Object prototype

function Vehicle(brand) {
  this.brand = brand
  this.sound = function () {
    console.log('broom!')
  }
}

function Motorbike(type, cc, brand) {
  Vehicle.call(this, brand)
  this.type = type
  this.cc = cc
}

const verza = new Motorbike("Verza", 150, "Honda")
// add property to object directly
verza.dim = function () {
  console.log("blink!")
}

const r25 = new Motorbike("R25", 250, "Yamaha")

// add to prototype
Motorbike.prototype.honk = function () {
  console.log("honk!")
}

console.log(verza)
console.log(r25)

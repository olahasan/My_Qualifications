====>>>> 
====>>>>­­


//first question

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return "Car Is Running Now";
  }
  stop() {
    return "Car Is Stopped";
  }
}

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("volvo", 2023, 440000);
let car3 = new Car("BMW", 2024, 460000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());

// Needed Output

("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");

////////////////////////////////////////////////////////////////////////////////

//second question

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }

  fullDetails() {
    return `${Tablet.name} Serial is ${Tablet.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

////////////////////////////////////////////////////////////////////////////////

//third question

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }

  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.formatCardNumber(
      this.#c
    )}`;
  }

  formatCardNumber(cardNumber) {
    if (/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
      return cardNumber;
    } else {
      const formattedCardNumber = cardNumber
        .toString()
        .replace(/(.{4})/g, "$1-");
      return formattedCardNumber.slice(0, -1);
    }
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

////////////////////////////////////////////////////////////////////////////////­­­­
fourth question
////////////////////////////////////////////////////////////////////////////////
fifth question

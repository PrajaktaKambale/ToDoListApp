//class
//Person -> name,address,phone

class Person {
  //add cnstructor in js

  //name
  //address
  //phone

  //to initialize the object
  constructor(name, address, phone, age) {
    console.log("inside  person constructor");
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.age = age;
  }

  //method
  printInfo() {
    console.log(`name:${this.name}`);
    console.log(`address:${this.address}`);
    console.log(`phone:${this.phone}`);
  }

  getDescription() {
    console.log(
      `${this.name} is of ${this.age} years old and he lives in ${this.address}`
    );
  }
}

const p = new Person("person1", "pune", "+91233", 20);
p.printInfo();
p.getDescription();
// class Mobile {
//   constructor() {
//     console.log("inside mobile constructor");
//   }
// }
// const m = new Mobile();

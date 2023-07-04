//class
//Person -> name,address,phone

// class Person {
//   // name
//   // address
//   // phone
// }

//constructor function
function Person(name, address, phone) {
  this.name = name;
  this.address = address;
  this.phone = phone;
}

Person.prototype.printInfo = () => {
  console.log(`name:${this.name}`);
  console.log(`address:${this.address}`);
  console.log(`phone:${this.phone}`);
};

const p = new Person("person1", "pune", "+91373");
p.printInfo();

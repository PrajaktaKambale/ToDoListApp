"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//class
//Person -> name,address,phone

var Person = function () {
  //add cnstructor in js

  //name
  //address
  //phone

  //to initialize the object
  function Person(name, address, phone, age) {
    _classCallCheck(this, Person);

    console.log("inside  person constructor");
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.age = age;
  }

  //method


  _createClass(Person, [{
    key: "printInfo",
    value: function printInfo() {
      console.log("name:" + this.name);
      console.log("address:" + this.address);
      console.log("phone:" + this.phone);
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      console.log(this.name + " is of " + this.age + " years old and he lives in " + this.address);
    }
  }]);

  return Person;
}();

var p = new Person("person1", "pune", "+91233", 20);
p.printInfo();
p.getDescription();
// class Mobile {
//   constructor() {
//     console.log("inside mobile constructor");
//   }
// }
// const m = new Mobile();

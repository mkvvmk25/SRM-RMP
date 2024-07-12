"use strict";

// oop
/* 
    inh
    abst
    poly
    encap 


    classes
        ***constructor functions
        ES6 Classes 
        Object.create()
 */

// let Person = function (p_firstName, p_age) {
// 	this.firstName = p_firstName;
// 	this.age = p_age;
// };

// kiran.height = 5;
// console.log(kiran);

// Person.prototype.gender = "None"; // prop to proto
// Person.prototype.aboutMe = function () {
// 	// methods to proto
// 	console.log(`hi, ${this.firstName} ${this.age}`);
// };

// console.log(Person.prototype);
// console.log(kiran.__proto__);
// console.log(Person.prototype === kiran.__proto__);

// console.log(kiran instanceof Person);
// console.log(kiran instanceof Object);

// let arr = [1, 2, 3];
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype);
// console.log(arr);

// Person.staticMethod = function () {
// 	console.log("i am static");
// };
// let raj = new Person("raj", 25);
// console.log(Person);
// Person.staticMethod();
// // raj.staticMethod();

// let h = Number.parseInt("45");
// let b = 25;
// console.log(h);

// get firstName() {
// 	return this.firstName;
// }
// set firstName(k) { // intialise
// 	this.firstName = k;
// }
// class PersonCl {
// 	#age; // private field
// 	#firstName; // private field

// 	constructor(firstName, age) {
// 		this.#firstName = firstName; // instialise
// 		this.#age = age;
// 	}

// 	getAge() {
// 		return this.#age;
// 	}
// 	setAge(age) {
// 		this.#age = age;
// 	}

// 	getFisrtName() {
// 		return this.#firstName;
// 	}
// 	setFirstName(k) {
// 		this.#firstName = k;
// 	}

// 	aboutMe() {
// 		console.log(`hi ${this.#firstName} , ${this.#age}`);
// 	}
// 	greet(msg) {
// 		console.log(`${msg} ${this.#firstName}`);
// 	}

// 	static staticMeth() {
// 		console.log(`hello`);
// 	}
// }

// let raj = new PersonCl("raj", 20);
// console.log(raj.getFisrtName());
// console.log(raj.getAge());

// let PersonProto = {
// 	aboutme() {
// 		console.log(`${this.firstName}, ${this.age}`);
// 	},
// 	greet: function () {
// 		console.log(`hi, ${this.firstName}`);
// 	},
// 	intitialiseProps(firstName, age) {
// 		this.firstName = firstName;
// 		this.age = age;
// 	}
// };

// let raj = Object.create(PersonProto);
// raj.intitialiseProps("raj", 25);
// raj.greet();
// raj.aboutme();
// console.log(raj);

// Inheritance
// using constructor function*****
// ES6 classes
// Object.create()

// let Person = function (firstName, age) {
// 	this.firstName = firstName;
// 	this.age = age;
// };

// Person.prototype.propertyOne = 25;
// Person.prototype.propertyTwo = 25;
// Person.prototype.aboutMe = function () {
// 	console.log(`${this.firstName}, ${this.age}`);
// };

// let Student = function (firstName, age, course) {
//     // calling the parent class contructor
//     // there is no inheritance happens because of below line
// 	Person.call(this, firstName, age);
//     this.course = course;
// };

// // linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.skill = "hockey";
// Student.prototype.play = function()
// {
//     console.log(`${this.firstName} plays ${this.skill}`);
// }

// let raj = new Student("raj", 20, "CSE");
// console.log(raj);

class PersonCl {
	#age; // private field
	#firstName; // private field

	constructor(firstName, age) {
		this.#firstName = firstName; // instialise
		this.#age = age;
	}

	getAge() {
		return this.#age;
	}
	setAge(age) {
		this.#age = age;
	}

	getFisrtName() {
		return this.#firstName;
	}
	setFirstName(k) {
		this.#firstName = k;
	}

	aboutMe() {
		console.log(`hi ${this.#firstName} , ${this.#age}`);
	}
	greet(msg) {
		console.log(`${msg} ${this.#firstName}`);
	}
}

class Student extends PersonCl {
	constructor(firstName, age, course) {
		super(firstName, age);
		this.course = course;
	}

	play(msg) {
		console.log(`${msg} ${this.getFisrtName()}`);
	}
}

let raj = new Student("raj", 25, "CSE");
console.log(raj);

// Async Js 


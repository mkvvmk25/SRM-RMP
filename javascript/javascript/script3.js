"use strict";

// let person = {
// 	firstName: "raj", // instance
// 	age: 25, // instance,
// 	aboutMe: function () {
// 		console.log(`${this.firstName} is ${this.age}`);
// 	},
//     skills:["football", "basketball"]
// };

// let t = {};

// let p1 = person;
// // shollow copy
// let copyPerson = Object.assign( { }, person);
// copyPerson.firstName = "kiran";
// copyPerson.skills[0] = "hockey";

// console.log(copyPerson);
// console.log(person);

// person.aboutMe();

// let person1  = person;
// person1.firstName = "kiran";
// console.log(person.firstName);
// console.log(person1.firstName);

// let arr = [1,2,3,4]
// let arr_2 = arr;

// arr_2[2] = 45;
// console.log(arr_2);
// console.log(arr);

// let f = 45;
// let g = f; //
// f  = 25;
// console.log(g);

/* 
    primitive types or non-refrence 
        number.......

    non-pimitive or refrence types
        object, arrays....


*/

// destructing arrays
// let arr = [1, 2, 3, 4];
// let [x, y , , z] = arr;
// [x, y] = [y, x];

// let arr = [1, 2, [3, 4]  ];
// let [x, y ,[z,t] ] = arr;
// console.log(x, y, z);

// destructing objects

// let person = {
// 	firstName: "raj", // instance
// 	age: 25, // instance,
// 	skills: ["football", "basketball"],
// };

// let { skills: mySkills, age, firstName } = person;
// console.log(mySkills, age, firstName);

// mySkills.push(25);
// console.log(mySkills);
// console.log(person.skills);

// spread op  ...
// let arr = [1,2,3,4]
// let h = [7,8,9]
// // console.log(h, arr);
// let t = [ ...h,   ...arr]
// console.log(t);

// t.push(45);
// console.log(arr);
// console.log(t);

// rest op
// let [a, , ...c] = t;
// console.log(a);
// // console.log(b);
// console.log(c);

// let person = {
// 	firstName: "raj", // instance
// 	age: 25, // instance,
// 	skills: ["football", "basketball"],
// };

// let raj = {
// 	...person
// };


// raj.firstName = "rajCopy";
// raj.skills.push("hockey");
// console.log(raj);
// console.log(person);


let person = {
	firstName: "raj", // instance
	age: 25, // instance,
	skills: ["football", "basketball"],
};

let {firstName:fname, ...restPerson} = person;
console.log(fname);
console.log(restPerson);

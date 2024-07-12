"use strict";

// /*
//     functions
//         function declaration
//         ""        expression
//         arrow funtions
// */

// // function declaration
// function fun(a, b) {
// 	let y = a + b;
// 	console.log(y);
// 	return undefined;
// }
// if(4 == 4 &&  "p" == "p")
// {
//     console.log("helo");
// }
// else
// {
//     console.log("qwerty");
// }

// let p = function (a,b)
// {
// 	console.log("hello");
// };

// let k = (a, b) => 65 + 10 + a + b;

// let d = k(10,10);
// console.log(d);

// console.log(p.length);
// p.push("98");
// p.unshift("100");
// console.log(p);

// p.pop();
// p.shift();

// let y = p.indexOf("hello");
// let t = p.includes("hello");
// console.log(y, t);

// // object
// let person = {
// 	age: 78,
// 	firstName: "raj",
// 	"full name": "raj kumar",
// 	aboutMe: function () {
// 		console.log(`hi ${person.firstName}, age is ${person.age}`);
// 	},
// };

// console.log(person);
// person.aboutMe();
// console.log(person["firstName"]);
// console.log(person.firstName);
// console.log(person["full name"]);

// let w = prompt("what u want to know about person ?");

// looping statements

let p = [12, "hello", true, NaN, null, 235.54];
// for (let index = 0; index < p.length; index++) {
// 	const element = p[index];
// 	if (element == "hello") {
// 		continue;
// 	}
// 	console.log(element);
// }

let h = 0;
// while (h != 5) {
// 	console.log("hello");
// 	h++;
// }

// p.forEach((element, ind, arrObj) => {
// 	console.log(element, ind, arrObj);
// });
// p.forEach((element, ind, arrObj) => {
// 	console.log(element, ind);
// });

// p.forEach((element, ind, arrObj) => {
// 	console.log(element);
// });

// DOM manipulation
let h1Ele = document.querySelector("h1");
let h1EleList = document.querySelectorAll("h1");

let h1EleCl = document.querySelector(".h1-cl");
let h1EleListCl = document.querySelectorAll(".h1-cl");

let h1EleId = document.querySelector("#h1-id");
let h1EleListId = document.querySelectorAll("#h1-id");

function changeColorRed() {
	// h1EleId.style.color = "red";
    h1EleId.classList.remove("blue")
    h1EleId.classList.add("red");
    
}

function changeColorBlue() {
	// h1EleId.style.color = "black";
    h1EleId.classList.remove("red");
	h1EleId.classList.add("blue");
}

console.log(h1EleCl);
h1EleCl.addEventListener("click", changeColorRed);

console.log(h1EleList[2]);
h1EleList[2].addEventListener("click", changeColorBlue);


/* 
    Js bsics 
        data typs
        ope
        loop
        conditional 
        ovbjects 
            . []
        arrays 
            iterating a
        DOM
            querrySelector() 
            examples 
*/

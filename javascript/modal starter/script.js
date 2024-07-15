'use strict';

let showModalBtnList = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');

let overlay = document.querySelector('.overlay');

let closeModalBtn = document.querySelector('.close-modal');

function openModal() {
  // remove hidden modal
  modal.classList.remove('hidden');
  // ""   "  "      overlay
  overlay.classList.remove('hidden');
}

function closeModal() {
  // remove hidden modal
  modal.classList.add('hidden');
  // ""   "  "      overlay
  overlay.classList.add('hidden');
}

for (let i = 0; i < showModalBtnList.length; i++) {
  showModalBtnList[i].addEventListener('click', function () {
    console.log('clicked');
    openModal();
  });
}

closeModalBtn.addEventListener('click', function () {
  console.log('clicked');
  closeModal();
});

overlay.addEventListener('click', function (event) {
  closeModal();
});

document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});



/*
/* 
    OOPS
                    inheritance
        encapsulation
        polymorphism
        abstraction


    classes 
        funtion constructor ***
        ES6 classes 
        object.create() 
        
*/
let Person = function (fName, p_age) {
	this.firstName = fName;
	this.age = p_age;
};

Person.prototype.aboutMe = function () {
	console.log(`i am ${this.firstName} ageof ${this.age}`);
};

Person.prototype.greetMe = function () {
	console.log(`Hi, ${this.firstName}!!`);
};

let Student = function (fName, p_age, stuSkill) {
	Person.call(this, fName, p_age); // function
	this.skills = stuSkill;
};

Student.prototype = Person.prototype;
Student.prototype.plays = function()
{
    console.log(this.greetMe(), this.skills);
}



let ExStudent = 
function (fName, p_age, stuSkill, degree) {
    Student.call(this, fName, p_age, stuSkill);
	this.degree = degree;
};
ExStudent.prototype = Student.prototype; 
ExStudent.prototype.graduate = function()
{
    this.greetMe();
    console.log(` has graduated on ${this.degree}`);
}

let raj = new ExStudent("raj", 20, "singing", "CSE");
console.log(raj);
raj.graduate();






*/


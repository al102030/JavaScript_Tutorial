// What is the JavaScript?
// JavaScript is High level Interpreted language
// Runs On client side 
// ECMAScript
// Multi-paradigm OOp/Functional

// Language of Frontend (Browser)
// To Build Design Powerful UI (React)
// To build Server side and full stack apps (Node.js)
// To build Mobile apps (React Native, NativeScript, Ionic)
// To build Desktop apps (Electron JS)

// Create a index.html and main.js file
// add script tag to your html file and locate your .js file
// open your file in a browser and check it out.


// First alert in script tag (alert("Hello World!");)
// Open console on browser by f12 on windows

// Console object and its methods (.log, .error, .warn, etc.)

// Lets go!

//=============================================================

// Comment >>>>>>>>>
// // One line comment
// /* multi 
// line
// comment */

//=============================================================

// // Variable (var, let, const) >>>>>>>>>
// // Strings, Numbers, Booleans, null, Undefined, Symbol
// const myName = 'Ali';
// const age = 10;
// const retain = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);

//=============================================================

// // Concatenation >>>>>>>>>
// console.log('My name is ' + myName + ' and I am ' + age);
// //Template String
// console.log(`My name is ${myName} and I am ${age}`);

//=============================================================

// // String Methods >>>>>>>>>
// const s = 'Hello World!';
// console.log(s.length)
// // Differences between property and method
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 5).toUpperCase())
// const s = 'Economy, Technology, Culture, Politics, Society';
// console.log(s.split(' '))

//=============================================================

// // Array - Variables that hold multiple values >>>>>>>>>
// const numbers = new Array(1,2,3,4,5);
// const fruits = ['Apple','Orange','Banana', true, 10];
// console.log(numbers);
// console.log(fruits);
// console.log(fruits[0]);
// fruits[3] = 'Pear';
// console.log(fruits);
// fruits.push('Grape');
// console.log(fruits);
// fruits.unshift('Lemon');
// console.log(fruits);
// fruits.pop();
// fruits.shift();
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('Orange'))

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element == 130);
// console.log(found);

//=============================================================

// // Object Literals >>>>>>>>>
// const person = {
//     firstName: 'Ali',
//     lastName: 'Darvishi',
//     age: 38,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: 'Takhti st',
//         city: 'Rasht',
//         province: 'Guilan',
//     }
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person.address.city);
// const { firstName, lastName, address: { city } } = person;
// console.log(lastName);
// console.log(city);
// person.email = 'Ali@gmail.com';
// // To check that a property is exist
// developer.name !== undefined
// console.log(person)

// const todos = [
//     {
//         id:1,
//         text:'Take out trash',
//         isCompleted:true,
//     },
//     {
//         id:2,
//         text:'Meeting with boss',
//         isCompleted:true,
//     },
//     {
//         id:3,
//         text:'Dentist appointment',
//         isCompleted:false,
//     },
// ];


// console.log(todos);
// console.log(todos[1].text);
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

//=============================================================

// // For >>>>>>>>>
// for(let i=0; i<10; i++){
//     console.log(`For loop Number: ${i}`)
// }

// for(let i=0; i<todos.length; i++){
//     console.log(todos[i].text)
// }

// for(let todo of todos){
//     console.log(todo.text)
// }

//=============================================================

// // While >>>>>>>>>
// let i = 0;
// while(i<11){
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }


//=============================================================

// //Do...While >>>>>>>>>
// const ourArray = [];
// let i = 0;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);

//=============================================================

// // For loop over an array >>>>>>>>>
// for(let i = 0; i< todos.length; i++){
//     console.log(todos[i].text)
// }

// for (let todo of todos){
//     console.log(todo.id);
// }


//=============================================================

// // forEach, map, filter (High order array methods) >>>>>>>>>
// todos.forEach(function(todo){
//     console.log(todo.text)
// });

// const todoText = todos.map(function(todo){
//     return todo.text
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text
// });
// console.log(todoCompleted);

//=============================================================

// // IF >>>>>>>>>
// const x = '10';
// if (x == 10){
//     console.log(`X is ${x}`);
// };

// const x = '20';
// if (x === 10){
//     console.log(`X is ${x}`);
// } else if (x > 10){
//     console.log('X is greater than 10');
// }
// else{
//     console.log(`X is less than 10`);
// };

// const x = 4;
// const y = 9;
// if (x > 5 || y < 10){ // && for and
//     console.log('X is greater than 5 or Y is less than 10');
// };

// if(x>2){
//     if(y< 10){
//         console.log('Ok');
//     }
// };

//=============================================================

// // Ternary Operator >>>>>>>>>
// const x = 10;
// const color = x > 10 ? 'Red' : 'Blue';
// console.log(color);

// const a = 5;
// const b = 10;
// const check = (a === b) ? "a and b are equal" 
//     : (a > b) ? "a is greater" 
//     : "b is greater";
// console.log(check);

//=============================================================

// // Switch >>>>>>>>>
// const x = 10;
// const color = x > 10 ? 'Red' : 'Blue';

// switch(color){
//     case 'Red':
//         console.log('Color Is Red');
//         break;
//     case 'Blue':
//         console.log('Color Is Blue');
//         break;
//     default:
//         console.log('Color Is not Red or Blue');
//         break;
// };


//=============================================================

// // Function >>>>>>>>>
// function addNums(num1, num2){
//     console.log(num1+num2);
// };
// addNums(10,20)

// function addNums(num1=1, num2=1){
//     return num1+num2;
// };
// console.log(addNums(10,20));

// // Arrow function "=>" (ES6)
// const addNums = (num1=1, num2=1) => {return num1+num2};
// // When we have only one expression
// const addNums = (num1=1, num2=1) => num1+num2;
// console.log(addNums(10,20));
// const addNums = num1 => num1 * 2;
// console.log(addNums(10));

// todos.forEach((todo) => console.log(todo.text))

//=============================================================

// // Recursion>>>>>>>>>
// function countUp(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countUp(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countUp(5));


// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
//   }

// function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }

// // Question (recursion) >>>>>>>>>
// function rangeOfNumbers(startNum, endNum) {
//     if (startNum >= endNum){
//         return [startNum]
//     } else {
//         const rangeArr = rangeOfNumbers(startNum+1, endNum)
//         rangeArr.unshift(startNum)
//         return rangeArr;
//     }
//   };

//   console.log(rangeOfNumbers(7, 6))


//=============================================================

// // Object Oriented Programming >>>>>>>>>
// /* There is two way to creating objects 
//  using constructor functions : with Prototype or with ES^ classes*/

// // Constructor Function (Prototype)
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // this.dob = dob;
//     this.dob = new Date(dob);

//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     };

//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`
//     };
// };


// // Person.prototype.getBirthYear = function(){
// //     return this.dob.getFullYear();
// // };

// // Person.prototype.getFullName = function(){
// //     return `${this.firstName} ${this.lastName}`
// // };



// // Instantiate Object(Prototype)
// const person1 = new Person('Ali', 'Darvishi', '3-4-1985');
// const person2 = new Person('John', 'Doe', '10-6-1970');

// console.log(person1);
// console.log(person2.firstName);
// console.log(person1.dob);
// // console.log(person1.dob.getFullYear());

// console.log(person1.getBirthYear())
// console.log(person2.getFullName())

// // ES6 Class
// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//         getBirthYear(){
//             return this.dob.getFullYear();
//     };

//         getFullName() {
//             return `${this.firstName} ${this.lastName}`
//     };
// }

// // Instantiate Object(Class)
// const person1 = new Person('Ali', 'Darvishi', '3-4-1985');
// const person2 = new Person('John', 'Doe', '10-6-1970');

// console.log(person1.getFullName());
// console.log(person2);

//=============================================================

// // DOM(Document Object model) >>>>>>>>>

// console.log(window);
// alert("hi");

// // Single element Selector
// console.log(document.getElementById('my-form'));
// // console.log(form)

// console.log(document.querySelector('.container'));

// console.log(document.querySelector('h1'));

// Multiple element selector
// console.log(document.querySelectorAll('.item'));

// // *** HTMLCollection cant be use like an array 
// console.log(document.getElementsByClassName('item'));

// console.log(document.getElementsByTagName('li'));


// const itmes = document.querySelectorAll('.item');
// itmes.forEach((item) => console.log(item));


// // Select ul class of items
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = 'Ali';
// ul.lastElementChild.innerHTML = '<h3>Darvishis</h3>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'Red';


// // Events
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     // e.preventDefault();
//     console.log("Clicked!")
//     // alert("clicked!");

//     // console.log(e.target.className)
// });

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#11dd88';

//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = "<h1>Hi</h1>"
// });

// // click >> mouseover >> mouseout


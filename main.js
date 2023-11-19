//Comment >>>>>>>>>
// // One line comment
// /* multi 
// line
// comment */

//=============================================================

// // Variable (var, let, const) >>>>>>>>>
// const myName = 'Ali';
// const age = 10;
// const retain = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z);

//=============================================================

// //Concatenation >>>>>>>>>
// console.log('My name is ' + myName + ' and I am ' + age);
// //Template String
// console.log(`My name is ${myName} and I am ${age}`);

//=============================================================

// // String Methods >>>>>>>>>
// const s = 'Hello World!';
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0, 5))
// console.log(s.split(' '))

//=============================================================

// //Array - Variables that hold multiple values >>>>>>>>>
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
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('Orange'))

//=============================================================

// //Object Literals >>>>>>>>>
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
// ]
// console.log(todos);
// console.log(todos[1].text);
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

//=============================================================

// //For >>>>>>>>>
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

// //While >>>>>>>>>
// let i = 0;
// while(i<11){
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }


//=============================================================

//forEach, map, filter >>>>>>>>>
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

//IF >>>>>>>>>
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
//     console.log(`X is not ${x}`);
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

// //Ternary Operator >>>>>>>>>
// const x = 10;
// const color = x > 10 ? 'Red' : 'Blue';
// console.log(color);

//=============================================================

// //Switch >>>>>>>>>
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

//Function >>>>>>>>>
// function addNums(num1, num2){
//     console.log(num1+num2);
// };
// addNums(10,20)

// function addNums(num1=1, num2=1){
//     return num1+num2;
// };
// console.log(addNums(10,20));

// const addNums = (num1=1, num2=1) => num1+num2; // {return num1+num2}
// console.log(addNums(10,20));

//=============================================================

//Object Oriented Programming >>>>>>>>>

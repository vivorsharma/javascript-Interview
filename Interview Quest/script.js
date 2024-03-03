// 1) How to avoid repitetion of values from an array?

// const arr = [10,20,10,30,20]
// first method
// let uniqueArr = arr.filter((value, index, self) => {
//     return self.indexOf(value) === index;
// })
// console.log(uniqueArr)

// second method
// let uniqueArr = []
// for(let i=0; i< arr.length; i++){
//     if(uniqueArr.indexOf(arr[i]) === -1){
//         uniqueArr.push(arr[i])
//     }
// }
// console.log(uniqueArr)

// third method
// let uniqueArr = arr.filter((value, index, self) => {
//     return self.indexOf(value) === index;
// })
// console.log(uniqueArr)

// 2) Arrange this array to ascending and descending order?

// const arr = [3,5,4,8,6,7,2,1]

// let ascendingOrder = arr.slice().sort((a,b) => a - b)
// console.log(ascendingOrder)

// let descendingOrder = arr.slice().sort((a,b) => b - a)
// console.log(descendingOrder)

// 3) array.map and array.forEach me diffrence ?
// NOTE: map() doesn't mutate the original array, instead it creates and returns a new array. containing results applying provided 
//       callback function to each element of the original array in order.

// NOTE: forEach() is a method in JavaScript used to execute a provided function once for each element in an array. It allows you 
//       to iterate over array elements and perform an operation or task for each element. (forEach is not a loop. it is a array prototype
//       function which will take a callback.)

// let arr = [1,2,3,4,5]

// using Map()
// const squareWithmap = arr.map((num) => {
// return num * num
// })
// console.log("map",squareWithmap)
// NOTE: map ek new array return krta h 

//  using forEach()
// let squareWithforEach = []
// arr.forEach(number => {
//     squareWithforEach.push(number * number)
// })
// console.log("for each",squareWithforEach)
// NOTE: forEach wala return undefined krta h but function ke andr aap kuch bhi operations perform kr skte ho.

// 4) how to returns a shortest word from an array of strings ?
// NOTE: reduce() method is useful when you need to compute a single result from multiple values in an array, such as finding 
//       the sum or product of elements, calculating averages, or concatenating strings.
// by using reduce method
// const arrayOfStrings = ["apple", "orange", "banana", "kiwi", "pear"]
// const shortest = arrayOfStrings.reduce((shortestWord, currentWord) => {
//     return currentWord.length < shortestWord.length ? currentWord : shortestWord;
// });
// console.log(shortest); 

// by using loop 
// let shortest = arrayOfStrings[0];
// for (const word of arrayOfStrings) {
//     if (word.length < shortest.length) {
//         shortest = word;
//     }
// }
// console.log(shortest);

// 5) write a function to remove duplicate element from an array ?

// const arr = [10, 20, 10, 20, 30, 30];
// function removeDuplicate(array){
//     return [...new Set(array)];
// }
// const uniqueArr = removeDuplicate(arr)
// console.log(uniqueArr)

// NOTE:  set is a collection of unique values.new Set(array): Converts the array array into a Set, removing duplicate elements.
//        [...]: Uses the spread operator to expand the elements of the Set into a new array.
//        The result is an array containing only the unique elements of the original array, with duplicates removed

// 6) hoisting and closure question ?

// Hoisting :  JavaScript organizes (hoists) variable declarations and function declarations to the top of their scope.
// console.log(x);
// var x = 5;

// Closure : function carries with it (closes over) all the variables that were available in its parent scope when it was created.
//           Closures are created every time a function is created, at function creation time.
// function outerFunction() {
//     var outerVariable = 'I am outer!';
    
//     function innerFunction() {
//       console.log(outerVariable); // Access outerVariable from the outer scope
//     }
  
//     return innerFunction;
//   }
  
//   var innerFunc = outerFunction();
//   innerFunc(); 
  

// 7) what are Higher order functions?

// function higherOrderFunction(callback) {
//     console.log("Inside higher-order function");
//     callback(); // Call the callback function
//   }
  
//   function callbackFunction() {
//     console.log("Inside callback function");
//   }
  
//   higherOrderFunction(callbackFunction);

//  NOTE: High-order functions are functions that can take other functions as arguments or return functions as their results.


// 8) what is 'use strict' in js ? 
// NOTE: using 'use strict' u can not create any global variable.? u have to declare that variable
// function Country() {
//     'use strict'
//     countryName ='India';
//     console.log(countryName) 
// }
// Country()


// 9) scope of a variable. find mistake.
// function test() {
//     let c = 45
//     console.log("in",c)
// }
// test()
// console.log("out",c)
// NOTE: remove let. because Inside the scope u have to define variable by global scope.


// 10) why this output is showing undefined and number?
// (function(){
// var a = b = 39;
// })()
// console.log("a", typeof a)
// console.log("b", typeof b)

// 11) explain this print this all and tell the type of this?
// const s1 = 'test'
// const s2 = String(1)
// const s3 = String(true)
// const s4 = new String('test')

// console.log(typeof(s1))
// console.log(typeof(s2))
// console.log(typeof(s3))
// console.log(typeof(s4))

// 12) Company has this array and wants to know the how many people are working for diffrent technology.
// const TechArray = [
//     {
//         JS: 23,
//         JAVA: 12,
//         ORACLE: 10
//     },
//     {
//         TS: 23,
//         MONGO: 12,
//         REDIS: 10
//     },
//     {
//         JS: 23,
//         JAVA: 12,
//         ORACLE: 10
//     },
//     {
//         TS: 23,
//         MONGO: 12,
//         REDIS: 10
//     },
// ]

// let newObj = []
// const NetTechObj = TechArray.forEach(ele => {
//     for(let x in ele){
//         if(newObj.hasOwnProperty(x)){
//             newObj[x] = newObj[x] + ele[x]
//         }else{
//             newObj[x] = ele[x]
//         }
//     }
// })
// console.log("new object", newObj)

// using reduce method.
// function countTechnologies(techArray) {
//     return techArray.reduce((techCount, techObj) => {
//         Object.keys(techObj).forEach(tech => {
//             techCount[tech] = (techCount[tech] || 0) + techObj[tech];
//         });
//         return techCount;
//     }, {});
// }

// const technologyCounts = countTechnologies(TechArray);
// console.log(technologyCounts);


// 13) which one should be print first?
// setTimeout(function(){
//     console.log("I am settimeout")
// },0)
// queueMicrotask(function(){
//     console.log("I am queMicrotask")
// })
//  call stack concept

// 14) what is array manipulation in js? 
// let arr = [34,89,78,'67',12,true]
// NOTE: Array manipulation refers to performing various operations and modifications on an array adding or removing elements, 
//       sorting, filtering, mapping, reducing, and many others.

// 15) arrow functions in js 
// var person = {
//     name: "Depankar",
//     getName : () => { console.log("name", this.name) }
// };
// var person1 = {
//     name: "Alex",
//     getName : function() { console.log("name", this.name) }
// };
// person.getName()
// person1.getName()

// NOTE: arrow functions behave differently from regular functions, especially regarding the this keyword. Arrow functions 
//       don't have their own this context. They borrow this from the surrounding code. Regular functions have their own this context, 
//       which depends on how they're called.

//  USE CASE : Use arrow functions for short, concise functions, especially when you don't need this. Use regular functions for more 
//             complex functions where you need this or arguments

// Arrow function
// const addArrow = (a, b) => a + b;

//  Regular function
// function addRegular(a, b) {
//     return a + b;
// }


// 16) Exception with setTimeout in js ?
// try{
//     setTimeout(function(){
//         console.log(a*20)
//     }, 3000)
// }catch(e){
//     console.error("a is not defined")
// }

// // 17) switch statement in js
// let i = 23
// switch(i){
//     case "23": 
//     console.log("1 is executed")
//     break;
//     case 23:
//     console.log("2 is executed")
//     break;
// }


// 18)  what is null vs undefined in js?
// NOTE: undefined is automatically assigned to variables or object properties that have not been initialized or don't exist.
//       null is explicitly assigned to indicate no value or the absence of an object.

// 19) what is setTimeout and setInterval ?
// setInterval(function(){
//     console.log("setInterval")
// },3000)
// setTimeout(function(){
//     console.log("setTimeout")
// },3000)

// setTimeout(() => {
// console.log("hello i am settimeout")
// },2000)
// setInterval(() => {
//     console.log("hello i am setinterval")
// }, 3000);

// NOTE: setTimeout runs a function once after a specified delay. such as showing a notification after a few seconds.
//       setInterval runs a function repeatedly at specified intervals until the timer is cleared. such as updating a clock every second or polling a server for updates


// 20) what is hoisting in js and temporal deadzone ?

// NOTE: Hoisting moves variable and function declarations to the top of their containing scope during compilation.Variable declarations
//       using var are hoisted but initialized with a value of undefined. Function declarations are also hoisted entirely.
// console.log(x);
// var x = 5;


// NOTE: The temporal dead zone is a behavior specific to let and const declarations where attempting to access the variable before 
//       its declaration results in a reference error. The temporal dead zone is a specific behavior introduced by let and const 
//       declarations in ECMAScript 6 (ES6). It refers to the period between entering the scope and the actual declaration being reached.
// console.log(x); 
// let x = 5;


// 21)what is the diffrence b/w map() and foreach() ?
//  map()
// const arr = [2,6,8,9,5]
// let newArr = arr.map(item => {
//     return item = item * 2
// })
// console.log("old", arr)
// console.log("new", newArr)

// //  forEach()
// let newArr = arr.forEach((item, i) => {
//     arr[i] = item * 2
// })
// console.log("old", arr)
// console.log("new", newArr)


// 22) how do you flatten an array in js ?
// const arr = [45,89,90,[43,67,[21,23,[9985],93],23],90]
// console.log(arr.flat(3)) 
//  if u dont know how many times u want to flatten then simply put infinity
// console.log(arr.flat(Infinity))


// 23) what is function hoisting in js ?

// NOTE: Function hoisting in JavaScript means that you can call a function before you declare it in your code. JavaScript moves 
//       all function declarations to the top of the scope before executing the code, so it's like the function declarations are 
//      "lifted" to the top. This allows you to call functions anywhere in your code, even before you write their actual definitions.

// say()
// function say() {
//     console.log("say hello")
// }

// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization

// let sayHi = function() {
//     console.log("Hi!");
// };


// 24) what is closures in js ?

// NOTE: A closure is when a function remembers the variables around it, even after the function finishes running. Closures are 
//       helpful for creating private variables and functions, and they're widely used in JavaScript for various tasks.

// function outerFunction() {
//     let outerVariable = 'Hello';
 
//     function innerFunction() {
//         console.log(outerVariable);
//     }
 
//     return innerFunction;
//  }
 
//  let innerFunc = outerFunction();
//  innerFunc(); 
// innerFunction remembers the outerVariable even after outerFunction finishes.
// This is because JavaScript "closes over" the variables that innerFunction needs from outerFunction, creating a closure


// 25) setTimeout tricks ?
// (function t(){
//     setTimeout(console.log("Inside setTimeout"),0)
//     console.log("outside settimeout")
// })();

// 26) how to make this array smaller in length?
// const arr = [34, 21, 22, 56, 45]
// arr.length = 4
// console.log(arr)

// 27) how to make one property private in js?
// class Employee {
//     Empname
//     #EmpCode
//     constructor(Empname, EmpCode) {
//         this.Empname = Empname
//         this.#EmpCode = EmpCode
//     }
// }
// let obj  = new Employee('Deepankar', 'EM321')
// console.log("EMP code", obj.EmpCode)
// console.log("EMP Name", obj.Empname)



// 28) hoising in functions ? u have ur normal function and anonymous function which one will be hoisted ?

// NOTE: Named functions and anonymous function expressions are hoisted, but named function declarations are hoisted entirely, while 
//      anonymous function expressions only hoist the variable declaration, not the function implementation. Therefore, it's generally
//      recommended to declare functions using named function declarations when you need them to be hoisted.

// sayHi(); // TypeError: sayHi is not a function

// let sayHi = function() {
//     console.log("Hi!");
// };

// 29)how to use event delegation with minimal listners ?
// 30) count elements in an array ?
// const arr = ['red','blue','green','blue','red','black','red']
// let count = arr.reduce((acc, cur) => {
//     acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
//     return acc; // Return the accumulator after the conditional operation
// }, {});

// console.log(count);
// NOTE: reduce() method iterates over the array arr, updating an accumulator object (acc) to count the occurrences of each unique element.

// 31) how to identify object type with prototype functions in js?
// const arr = [34,90,65]
// console.log(Object.prototype.toString.call(arr))

// 32) what is prototype in js ?

// NOTE: prototypes in JavaScript provide a way to share properties and methods among objects. They form a chain of inheritance that 
//       allows objects to access properties and methods defined in their prototypes and up the prototype chain. Understanding prototypes 
//       is essential for effective object-oriented programming in JavaScript.


// 33)  how to create a new promise to resolve your buisness logic output in js ?
// var num = 24

// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(num%2===0){
//             resolve("Resolving as",num,"even")
//         }else{
//             reject("Rejecting as",num, "odd")
//         }
//     }, 1000)
// })
// console.log(prom)

// prom.then(res => {
//     console.log(prom,res)
// }).catch(err => {
//     console.error(prom,err);
// })

// 34) how to reverse a string ?
//  let str = 'javascript'
//  by using a split() and reverse() method. split() string ko array m convert kr deta h.
//  const reverseString = str.split('').reverse('').join('')
//  console.log(reverseString)

// by using a loop
// let reversed = ''
// for (let i=str.length-1; i>=0; i--){
//     reversed += str[i];
// }
// console.log(reversed)

// by using function 
// function reverseString(str) {
//     let reversed = ''
//     for(let i = str.length-1; i>=0; i--){
//         reversed += str[i]
//     }
//     return reversed;
// }
// const output = reverseString('hello')
// console.log(output)


// 35) How to merge these 4 arrays but u should not be having duplicates ?
// const arr1 = ['red','blue','green','black']
// const arr2 = ['red','white','pink']
// const arr3 = ['gray','yellow','blue','black']
// const arr4 = ['white','voilet','green']

// const result = [...new Set([...arr1, ...arr2, ...arr3, ...arr4])]
// console.log(result)

// 36) How to calculate factorial of a number ? using recursive approach.

// const num = 6
// function fact(n){
//     return n === 0 ? 1 : n * fact(n-1)
// }
// console.log(fact(num))

// by using loop we can also solve this.
// const num = 6;
// let res = 1
// for(let i = num; i>1; i--){
//     res *= i
// }
// console.log(res)


// 37) how to check a number is whole number or not ?

// const v = 1.5
// console.log(v % 1 === 0)
// console.log(Number.isInteger(v))

// 38) FizzBuzz Problem in js ?

// const max = 100;
// for(let i = 1; i<=max; i++){
//     let res = ''
//     if(i%3){
//         res += 'Fizz'
//     }
//     if(i%5){
//         res += "Buzz"
//     }
//     if(res){
//         console.log(i, res)
//     }
// }

// 38) Remove duplicates from an array of objects ?
// const emp =[
//     {
//         EmployeeName : 'Deepankar', 
//         BU: 'In'
//     },
//     {
//         EmployeeName : 'yash', 
//         BU: 'Us'
//     },
//     {
//         EmployeeName : 'Vivor', 
//         BU: 'Us'
//     },
//     {
//         EmployeeName : 'Deepankar', 
//         BU: 'In'
//     },
// ]

// const res = [...new Set(emp.map(i => JSON.stringify(i)))]
// console.log(res)
// console.log(JSON.parse(res[2]))


// 39) how to get the nearest Integer of a decimal value.
// const c = 7.5

// console.log("Math.ceil :", Math.ceil(c))
// console.log("Math.floor :", Math.floor(c))
// console.log("Math.trunc :", Math.trunc(c))
// console.log("Math.round :", Math.round(c))


// 40) diffrence between map() and Map() ?

// NOTE: map() is a method available for arrays that transforms each element of the array based on a callback function and returns a 
//       new array. Map() is a built-in object in JavaScript used to store key-value pairs where each key maps to a specific value.
 
// const arr = [1,2,3,4]
// const res = arr.map((num) => {
//     return num * num
// })
// console.log(res)

// const mp = new Map([['Name','Vivor']])
// console.log(mp)


// 41)  what is event loop and hoisting in js ?

// NOTE: Event Loop enables JavaScript to handle asynchronous operations efficiently, while Hoisting allows variables and functions 
//       to be accessed before their declarations, enhancing code readability and flexibility. 

// 42) How to stop a setInterval operation in js?

// if u not have to impliment dom opeartion then this. if want to stop with using dom opeartion then create one stop function on button
// let i = 1;
// const s_id = setInterval(() => {
//     console.log(s_id, "print", i++)
//     if(i>10){
//         clearInterval(s_id)
//     }
// },1000)


// 43) what is the diffrence b/w find and filter ?
// const Employee = [
//     {
//         Name: 'Vivor',
//         Dept: 'IT'
//     },
//     {
//         Name: 'sham',
//         Dept: 'Finance'
//     },
//     {
//         Name: 'Raj',
//         Dept: 'Marketing'
//     },
//     {
//         Name: 'Vivek',
//         Dept: 'IT'
//     },
// ]

// console.log(Employee.find((emp) => emp.Dept === 'IT'))
// console.log(Employee.filter((emp) => emp.Dept === 'IT'))

// NOTE: The find() method is used to find the first element in an array that satisfies a given condition.
//       The filter() method is used to create a new array with all elements that pass a given condition.


// 44) what is a higher order function.

// NOTE: higher-order function is a function that either takes one or more functions as arguments, returns a function as its result.(both)

// function greet(name, callback){
//     return callback(name)
// }
// function sayHello(name){
//     return 'Hello' + name + '!'
// }
// console.log(greet("Alice", sayHello))

// NOTE:  The greet function is a higher-order function because it takes a function (sayHello) as an argument. The sayHello function is 
//        a callback function because it is passed as an argument to another function (greet). The greet function delegates the task of 
//        generating the greeting message to the callback function (sayHello). This allows for flexibility and reusability, as we can 
//        easily switch out the callback function to change how the greeting is formatted without modifying the greet function itself.

// 45) what is the work of using ASYNC in scrip tag ?

// NOTE: it's important to note that using the async attribute can have implications for scripts that rely on specific execution order 
//       or require access to elements in the HTML document. In such cases, you may need to use other techniques, such as the defer 
//       attribute or explicitly waiting for the document to be fully loaded before executing certain scripts.


// 46)  what is the diffrence between session storage and Local Storage.

// function createSessionStorage(){
//     sessionStorage.setItem('[S] Name', 'Vivor')
// }
// function createlocalStorage(){
//     localStorage.setItem('[L] Name', 'Vivor')
// }

// NOTE: Your session storage will be deleted if you close your tab or browser. but your local Storage will be there until unless you
//       have not deleted it manually or programatically. 

// 47) u need to get first five colors from the string.
// const str = "Red, Blue, Violet|Maroon, Green, Gray|Black, Cyan"

// const regex = /[,|]/
// const arr = str.split(regex, 5)
// console.log(arr)


// 48) why at() is was introduced in ES2022 when square brackket is there?
// const arr = [
//     "Black",
//     "Red",
//     "Green",
//     "Yellow",
//     "Blue"
// ]
// console.log(arr[arr.length-2])
// NOTE: You are replacing this whole line with at().
// console.log(arr.at(-2))

// 49) How to Identify Devices in js ?

// console.log(navigator.userAgent)
// console.log(navigator.userAgent.match(/mobile/i))  (windows/mobile)

// 50) How to create a fancy styles in console.log() in js ?

//  console.log("%cSome Text", "background: black; color: white; font-size: x-large")

// 51) How do you give a user download link.
//  using download attribute

// 52) what is debouncing in js ?where to utilize it 

// NOTE: Debouncing is a technique used in JavaScript to limit the number of times a function is called. such as when typing in input 
//       fields, scrolling, or resizing the window. It helps avoid rapid, unnecessary function calls and makes your application more 
//       efficient and responsive.


// 53) How to destructue a complex nested object in js ?

// let Employee = {
//     empID: 232354,
//     empName: 'Vivor',
//     techStack: {
//         lang : ['JS', 'TS'],
//         FW : ['Angular', 'React', 'Express'],
//         DB : ['MOngo', 'Oracle']
//     }
// }
// let {empID, empName, techStack: {lang,FW, DB}} = Employee
// console.log(FW)

// 54) what is Dense Array and Sparse Array ?

// let densedArr = [36,4,5,0,34]
// console.log(densedArr)
// let SparseArr = [36,4,,,34]
// console.log(SparseArr)

// NOTE:  A dense array is an array where all elements between the minimum and maximum index are assigned a value. A sparse array, on 
//       the other hand is an array where some or most of the elements between the minimum and maximum do not have a value to them.

// var a =1

// function foo(){
//     var a =2 
//     console.log(a)
// }
// foo()
// console.log(a)

 // 55) let arr =[15,20,24,3,9,11,0,8] sort this array but these two elements  should not be sorted: 24 and 3 they should remain as it is ?

// let arr = [15, 20, 24, 3, 9, 11, 0, 8];

// Extracting elements 24 and 3
// let specialElements = arr.filter(element => element === 24 || element === 3);

// Sorting the rest of the array
// let sortedRest = arr.filter(element => element !== 24 && element !== 3).sort((a, b) => a - b);

// Combining the sorted rest and the special elements
// let result = [];
// for (let i = 0, j = 0; i < arr.length; i++) {
//     if (arr[i] === 24 || arr[i] === 3) {
//         result.push(arr[i]);
//     } else {
//         result.push(sortedRest[j]);
//         j++;
//     }
// }

// console.log(result); // Output: [0, 8, 9, 11, 15, 20, 24, 3]

// 56) Find Even values from an array, Make the Double of every element and find Array length manually?
// 57) what is anagram?
// do strings jinke character same but unka order alag ho skta h ya arrangement alag ho skta h toh voh apna aap me anagram h. or unhe anagram khte h. 
// example: SILENT=LISTEN, HEART=EARTH, 

// NOTE: Anagram strings are two strings built up by the same set of characters, where  the order of characters is the only diffrence in the strings.

// 58)  what is palindrome?
// koi bhi string ko age se pdho ya piche se padho voh same  ho to palindrome hai.
// example: level, aba
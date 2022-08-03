//***/ VARIABLES::

// 1.What is Javascript?
// Ans:JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. 

// 2.How does JS works?
// Ans:An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.Simply,inside a normal Web page you place some JavaScript code (See How Web Pages Work for details on Web pages). When the browser loads the page, the browser has a built-in interpreter that reads the JavaScript code it finds in the page and runs it.

// 3.What is variable?
// Ans:Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on. 

// 4.Declare a variable.
// Ans:var num = 0;

// 5.Types of variable.How can you find out type of a variable?
// Ans: The types of variable are given below:-
//   a)String
//    var name = "Shathy"

//   b)Number
//    var age = 17;

//  c)Boolean
//    var isSingle = false;
//    var serious = true;

//  6.Primitive and Non-Primitive data types.
//  Ans:Primitive data types are:- 
//      Number, String, Boolean, Undefined, Null.
//      Non-Primitive data types are:- 
//      Object, Array, Function.

//  7.Naming convention of JS variables i.e which type of names are not allowed in js variables name.
//  Ans:a) Variable name can not be any kewword.such as break,return,false etc
//      b) Space is not allowed.Such as- my name address 
//      c) variable name can not have quotation.Such as- var "name" = "S hathy" 
//      d) Variable name can not starts with a number.Such as-88city  
//      e) Dash is not used.Such as- var user-name = "Shathy"
//      f) Variable name is case sensitive.Such as- vAR,Var,VAr etc

//  8.Math Operation:+, -, *, /, %.
//  Ans:This Operations are used to sum, substract,multiple,remainder etc  

//  9.Short hand:+=, -+, *=, /=
//  Ans:These are assign operator.Short version of adding,subtructing etc 1 to the existing value.

//  10.++, -- 
//  Ans: ++ means adding 1 to the existing value.
//       -- means deducting 1 from the existing value.

// 11.parseInt, parseFloat 
//      Ans:  The parseInt method parses a value as a string and returns the first integer. parseFloat() method parses an argument and returns a floating point number 
// var num = 4.3456;
// console.log(parseInt(num));
// console.log(parseFloat(num));

// 12.toFixed
// Ans:toFixed() is a Number method that is used to format a number using fixed-point notation and returns a string.
// var fixNum = num.toFixed(2);
// console.log(fixNum);


//***/ ARRAY::

// 1.What is an array in JavaScript and purpose.
// Ans: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of multiple elements and access them by a single variable.

// 2.How to dwclare an array?
// Ans: var names = ['Shathy','Zowa','Tarikul'];

// 3.Number of elements in an array.
// Ans:
// var names = ['Shathy','Zowa','Tarikul', 'Shohel'];
// var elementNumber = names.length;
// console.log(elementNumber);

// 4.What is an index?
// Ans:The index of a value in an array is that value's location within the array.It starts with 0.

// 5.Find the value of an element by index.
// var names = ['Shathy','Zowa','Tarikul', 'Shohel'];
// var element = names[2];
// console.log(element);

// 6.Change an element by index.
// Ans:
// names[3] = 'Islam'
// console.log(names);

// 7.Get the index of an element by the value.
// Ans:
// var names = ['Shathy','Zowa','Tarikul', 'Shohel'];
// var indexNumber = names.indexOf('Zowa');
// console.log(indexNumber);

// 8.What does it mean when you get undefined while getting the value of an element by index.
// Ans: A variable that has not been assigned a value is of type undefined 
// var names = ['Shathy','Zowa','Tarikul', 'Shohel'];
// var element = names[5];
//  console.log(element);

//  9.How can you add an element to an array at the last position?
//  Ans:
// var names = ['Shathy','Zowa','Tarikul', 'Shohel'];
// names.push('Tasfia');
// console.log(names);


// 10.Remove the last element from Array. 
// Ans:
// names.pop();
// console.log(names);


// 11.Add the first element in an Array. 
// Ans:
// names.unshift('Imran');
// console.log(names);



// 12.Remove the first element from Array. 
// Ans:
// names.shift();
// console.log(names);


//***/ CONDITIONALS::
// 1.Meaning of:>, <, >=, <=, ==, !=, ===, !==
// Ans:
// console.log(5>6);
// console.log(5<6);
// console.log(5>=6);
// console.log(5<=6);
// console.log(5==5);
// console.log(5=='5');
// console.log(5!=6);
// console.log(5!=5);
// console.log(5===6);
// console.log(5==='5');
// console.log(5===5);
// console.log(5!=='5');
// console.log(5!==6);
// console.log(5!==5);

// 5==5     =true
// 5=='5'   =true
// 5===5    =true
// 5==='5'  =false

// 2.Meaning of:&&
// Ans:You have to fulfill all conditions.


// 3.Meaning of:||
// Ans:You have to fulfill one conditions from a lot of conditions.

// 4.Let,s say you have X amount of money,
// if you have more than 80,000,then you will bye Mac ,
// if more than 60,000, then you will bye gaming laptop,
// if more than 40,000, then you will bye Lenova Yoga,
// if more than 20,000, then you will bye used laptop,
// otherwise you will use mobile phone. 
// Ans:
// var myMoney = 55000;
// if(myMoney > 80000){
//  console.log('I will bye Mac.');
// }
// else if(myMoney > 60000){
//  console.log('I will bye Gaming laptop.');
// }
// else if(myMoney > 40000){
//  console.log('I will bye Lenova yoga.');
// }
// else if(myMoney > 20000){
//  console.log('I will bye an used laptop.');
// }
// else{
//     console.log('I will use phone.');
// }

//***/ LOOP::
// 1.Display "Ajke amar mon valo nei" for 39 times. 
// Ans:
//  for(var i=1; i<=39;i++ ){
//     console.log('Ajke amar mon valo nei');
//  }

// 1.Display numbers between 58 to 98. 
// Ans:
// for(var i=58; i<=98;i++ ){
//         console.log(i);
//       }

// 3.Show all even numbers from 412 to 456. 
// Ans:
// for(var i=412; i<=456; i+=2 ){
//     console.log(i);
//  }


// 4.Show all odd numbers from 581 to 623.
// Ans:
// for(var i=581; i<=623; i+=2 ){
//     console.log(i);
//  }


 // 5.Difference between while loop and for loop.
// Ans:
// var i=1;
// while(i<=5){
//     console.log(i); 
//     i++;
// }


// for(var i=1; i<=5; i++ ){
//     console.log(i);
//  }


// 6.Declare an array for all the topics that you have learned last few days, display then as output.
// Ans:
// var learnigTopics = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Javascript'];
// console.log(learnigTopics);


// 7.Create an array for all the mobile phones.Display all the elements of the array by using a while loop. 
// Ans:
// var mobilePhones = ['Nokia', 'Oppo', 'Poko M3', 'Swami', 'Readmi 11 Pro'];
// var i = 0;
// while(i < mobilePhones.length){
//    var mobile =mobilePhones[i];
//     console.log(mobile);
//     i++;
// }


// 8.Run a loop from 30 to 86,this loop will stop if the values get higher than 44. 
// Ans:
// for(var i= 30; i<=86; i++){
//     if(i>44){
//       break;
//     }
//     console.log(i);
// }


// 9.Write the price of the books that you have display the prices if the prices is lower than 200. 
// Ans:
// var booksPrices = [50, 100, 70, 200, 300, 40, 30, 250, 170, 90, 400, 290];
// var i = 0;

// while(i<booksPrices.length){
//     var price = booksPrices[i]; 
//     i++;
// if(price> 200){
//     continue;
// }

  
// console.log(price);

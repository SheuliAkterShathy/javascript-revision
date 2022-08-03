//***/ VARIABLES::

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

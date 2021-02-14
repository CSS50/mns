/* Function
1.Create a function than
2. Call the function

*/

//create 
// function fun(){
//     alert('this is a function');
// }

// //call 
// fun();

/* let's create a function that take in a name 
 and says hello followed by your name

  for example 

 Name: "Monir"
 Return: "Hello Monir"
*/

// function greeting(){
//     var name = prompt('What is your name?');
//     var result = 'helllo' + ' ' + name; //String Concatenation
//     console.log(result);
// }
// greeting();

//How do arguments work in function?
//How do we add 2 numbers together in a function?

// function someNumber(num1, num2){
//     var result = num1 + num2;
//     console.log(result);
// }

// someNumber(10, 10);


//While loops

// var num = 0;

// while (num < 100){
//     num += 1;
//     console.log(num);
// }

//for loops

// for (let num = 0; num <= 100; num++){
//     console.log(num);
// }

//String in Javascript (common methods)
// let fruit = 'banana,apple,orange,blackberry';
// let moreFruit = 'banana\apple';

// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(2, 6));
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(','));//split by a comma
// console.log(fruit.split(''));//split by a characters


// // Array 
// let fruits = ['banna', 'apple', 'orange', 'pineapples'];
// fruits = new Array('banana', 'apple', 'orange', 'pineapples');


// console.log(fruits[3]);// access value at index 3rd

// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// // array common methods
// console.log('to string', fruits.toString());
// console.log(fruits.join(' * '));
// console.log(fruits.pop(), fruits);//removes lat item
// console.log(fruits.push('blackberries'), fruits); // appends
// console.log(fruits[3])
// fruits[fruits.length] = 'new fruit';//same as push
// console.log(fruits);
// fruits.shift();
// console.log(fruits);// remove first element from an array
// fruits.unshift('kiwi'); // add first element to an array
// console.log(fruits);

// let vagetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroceries = fruits.concat(vagetables);//combine arrays
// console.log(allGroceries); 
// console.log(allGroceries.slice(1, 4)); 
// console.log(allGroceries.reverse()); 


// let someNumber = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(someNumber.sort(function(a, b) {return a-b}));
// console.log(someNumber.sort(function(a, b) {return b-a}));

//Objects in Javascript
//dictionaries in Python

let student = {
    first: 'Monir', 
    last: 'Sarkar',
    age: 29,
    height: 334,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age + '\n' + 'this is height: ' + this.height;
    }
};

// console.log(student.first);
// console.log(student.last);
// student.first = 'notMonir'; // change value
// console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

//Conditionals, Control flows (if else)
// 18-35 is my target demographic
//&& and
// || or

 var age = prompt('what is your age?');

// if ( (age >= 18) && (age <=35) ) {
//     status = 'target demo';
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);

// }


//Switch statements
//diggerentiate between weekday vs. weekend
//day 0 --> Sunday --> weekend
//day 1 --> Monday --> weekday
//day 2 --> Twesday
//day 3 --> Wednesday
//day 4 --> Thursday --> weekday 
//day 5 --> Friday --> weekend 
//day 6 --> Saturday --> weekend

switch (6) {
    case 0:
      text = 'weekend';
      break;
     case 5:
        text = 'weekend';
        break;
      case 6:
        text = 'weekend';
        break;
       default:
           text = 'weekday';    
}

console.log(text);



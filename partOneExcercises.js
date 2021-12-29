//write a function that takes two numbers and returns maximum
const findMax = (num1, num2) => (num1 >=2) ? num1 : num2;

//write a function that returns 'landscape' or 'portrait' depending on max and width values, if dimensions are equal return 'portrait'
const getOrientation = (width, height) => (height >= width) ?'portrait' :'landscape';

//fizzbuzz exercise, 
//if divisible by 3, return 'fizz'
//if divisible by 5, return 'buzz'
//if divisible by 3 and 5, return 'fizzbuzz'
//if not divisible by either return original number
//if not number, return 'not a number'
const fizzBuzz = (num) => {
  if (typeof num !== 'number') return 'not a number';
  if((num % 3 ===0) && (num % 5 == 0))  return 'fizzbuzz';
  if(num % 3 ===0) return 'fizz';
  if(num % 5 ===0) return 'buzz';
  return num;
}
//showNumbers function with parameter, limit
//outputs an array that counts from 0 to limit and also outputs whether that number is even or oDD
const showNumber = (limit) => {
  let tempArray= [...Array(limit+1).keys()]
  .map((element) => {
    let message = (element % 2 === 0) ? 'even' : 'odd'; 
    return `${element} ${message}`;
  });

  return tempArray;
}

//countTruthy function with parameter, array
//returns number of truthy elements in array
const countTruthy = (arr) => {
  let count = 0;
  
  arr.forEach((elem) => {
    if(elem) count++;
  });
  
  return count;
}

//showProperties function with parameter, obj
//displays properties and their values IF they are string data type
//console.log in same format as showNumbers function above
const movie = {
  title: 'a',
  releaseYear:2019,
  rating: 4.5,
  director:'b'
};

const showProperties = (obj) => {
  for(const key in obj) {
    if (typeof obj[key] === 'string')
      console.log(`${key} ${obj[key]}`);
  }
}

//sum function with limit parameter
//returns the sum of all multiples of 3 and 5 up to this limit
//10 can be used as number to test, the multiples are 3,6,9,5,10, and sum is 33
const sum = (limit) => {
  let number= [...Array(limit+1).keys()]
    .filter((n) => n % 3 === 0 || n % 5 === 0)
    .reduce((acc, current) =>  acc + current);
  return number;
}

//calculateGrade function with marks parameter
//marks is array of integers ranging from 1-100
//compute average and output grade based on scale below:
//1-59: F, 60-69: D, 70-79: C, 80-89: B, 90-100: A
const marks = [80,80,50];
const calculateGrade = (scores) => {
  const average = ((scores.reduce((acc, curr) => acc+curr)) / scores.length);
  
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

//function showStars with parameter rows, input ranges from 0-100
//ouptput to console is stars with format so that there are corresponding number of rows
//and in each row there are equal number of stars of that row number
const showStars = (rows) => {
  for(var i = 1; i <= rows; i++){
      let str = '';
      for(i= 0; i <rows; i++){
        str+= '*';
        console.log(str);
      }
  }
}
//create Address object 
//public properties:
//street
//city
//zipcode
//methods:
//showAddress(), displays all properties of this object with their value
class Address{

  constructor(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
  }
  showAddress(){
    return `Street: ${this.street} 
            City: ${this.city} 
            Zipcode: ${this.zipcode}`
  }
}
// const addy = new Address('555 joco ln', 'indianapolis', 34343);
// console.log(addy);
// console.log(addy.showAddress());


//create Address object with factory function
//public properties:
//street
//city
//zipcode
//methods:
//showAddress(), displays all properties of this object with their value
function createAddress(street,city,zipcode) {

  //to make private variable define here and don't return in return statement
 
  function showAddress(){
    return `Street: ${street} 
            City: ${city} 
            Zipcode: ${zipcode}`
  }
  return{
    street,
    city,
    zipcode,
    showAddress
  }
}
// const addy = createAddress('1234 minerva ln', 'indy', 45645);
// console.log(addy);
// console.log(addy.showAddress());


//create two functions
//areEqual(address1, address2), returns true if all properties are equal, otherswise false
//areSame(address1,address2), returns true is references are equal, otherwise false
let address1 = new Address('a','b', 'c');
let address2 = new Address('a','b','c');

const areEqual = (address1,address2) => {
  for(let k1 in address1) {
    if(address1[k1] !== address2[k1]) return false;
  }
  return true;
}
const areSame = (address1, address2) => {
  return address1 === address2;
}


//use object literal syntax to construct and initialize BlogPost object w/ properties:
//title, body, author, comments object with author and body properties, views, isLive
let post = {
  title: 'My Post',
  body: 'some text',
  author: 'joe smith',
  views: 50,
  comments: [
    {
    author: 'some person',
    body: 'comment body text here'
    }
  ],
  isLive: false
}


//create BlogPost object with properties above using constructor function
//scenario in which the user has drafted the post but not completed
class BlogPost{
  views
  comments
  isLive

  constructor(title, body, author){
    this.title=title,
    this.body=body,
    this.author=author,
    this.views=0,
    this.comments=[],
    this.isLive=false
  }
}

//***********************/
//  WORKING WITH ARRAYS //
//***********************/


//create function arrayFromRange with parameters, min and max
//min and max are numbers and max has to be greater than or equal to min
//outputs array with numbers starting from min to max in ascending order
-10, -4
const arrayFromRange = (min,max) => {
  const size = (max-min)+1;
  return [...Array(size).keys()]
        .map((n) => n + min) 
}


//create function includes with parameters, array and searchElement
//returns true if number found in array, otherwise false
//can't use built in includes function
const includes = (array, searchElement) => {
    for(let n of array) {
      if(n === searchElement) return true;
    }
    return false;
}


//create function except with parameters, numbers array and excluded arrays, both are number data type
//returns an array with difference of array numbers and excluded, (output = numbers - excluded)
const except = (numbers,excluded) => {
    return numbers
              .filter((n) => (!excluded.includes(n)));
}


//create function countOccurences with parameters array: numbers, searchElement: number 
//returns number of times search element has occurred in array
//use reduce method for arrays
const countOccurrences = (array, searchElement) => {
      return array
              .reduce((total, current) => {
                let isFound = (current ===  searchElement)  ? 1 : 0;
                return total + isFound;
              },0)
}
// console.log(countOccurrences([1,1,1,1,2,3,4,5,5], 0));

//create function getMax with parameters array: numbers
//returns max number using reduce method
const getMax = (array) => array.reduce((a,b) => (a > b) ?  a : b);
// console.log(getMax([1,1,1,1,782,3,4,5,5]));


//create function sums, with optional number of parameters OR array of numbers
//returns sum
//use isArray() method to detect if numbers were passed or array
const sums = (...args) => (Array.isArray(args[0])) ? args[0].reduce((a,b) => a + b) : args.reduce((a,b) => a + b);
// console.log(sums(1,2,3,4));
// console.log(sums([1,2,3,4]));


//create Circle object using object literal syntax
//radius property that we can read or write to
//area property that is read-only  
const circle = {
      radius: 0,
      get area(){
        return Math.PI * this.radius * this.radius;
      }
}

//add error handling to function below so that if anything besides
//array is passed to function, it throws exception and logs to console
// const countElements = (array, searchElement) => {
//   return array
//           .reduce((total, current) => {
//             let isFound = (current ===  searchElement)  ? 1 : 0;
//             return total + isFound;
//           },0)
// }
const countElements = (array, searchElement) => {
  if(!Array.isArray(array))
    throw new Error('array argument invalid');
  
  return array
          .reduce((total, current) => {
            let isFound = (current ===  searchElement)  ? 1 : 0;
            return total + isFound;
          },0)
}
// try{
//   console.log(countElements(null, 1));
// }
// catch (error){
//   console.error(error);
// }




























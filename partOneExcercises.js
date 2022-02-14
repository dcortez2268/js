//write a function that takes two numbers and returns maximum
function findMax(num1, num2){
  return (num1 > num2) ? num1 : num2;
}
// console.log(findMax(3,1));


//write a function that returns 'landscape' or 'portrait' depending on max and width values, if dimensions are equal return 'portrait'
function getOrientation(width, height){
  return (height >= width) ? "portrait" : "landscape"; 
}
//console.log(getOrientation(2,2));


//fizzbuzz exercise, 
//if divisible by 3, return 'fizz'
//if divisible by 5, return 'buzz'
//if divisible by 3 and 5, return 'fizzbuzz'
//if not divisible by either return original number
//if not number, return NaN
function fizzBuzz(num){
  if (typeof num !== "number") return NaN;
  
  if (( num % 3 === 0) && (num % 5 === 0)) return "fizzbuzz";
  if ( num % 3 ===0 ) return "fizz";
  if ( num % 5 ===0 ) return "buzz";
  
  return num;
}
// console.log(fizzBuzz(15));


//demerit points exercise,
//checkspeed function:
//parameters: speed, int or floating point number
//properties: speedLimit = 70, int
//output: if speed of car is <= speed limit, output = "ok", for every 5 mph over speed limit, the driver is issued 1 point and output is demerit points, if driver gets >12 points output is "suspended"
// use math.floor function to return integer of points
function getDemeritPoints(speed){
  const speedLimit = 70;
  const mphPerPoint = 5;
  if(speed <= speedLimit) return "ok";
  
  //calculate demerit points
  const demeritPoints = Math.floor((speed - speedLimit)/ mphPerPoint);
  return (demeritPoints >=12) ? "suspended" : demeritPoints;
}
// console.log(getDemeritPoints(70));


//showNumbers function with parameter, limit that is int
//returns an array that counts from 0 to limit, and also outputs whether that number is even or oDD
function showNumber(limit){
  let array = [];
  for(i = 0; i < limit +1; i++){
    let message = (i %2 === 0) ? `${i} EVEN` : `${i} ODD`;
    array.push(message);
  }
 return array;
}
// console.log(showNumber(10)); 


//countTruthy function with parameter, arr
//returns number of truthy elements in array
function countTruthy(arr){
  let count = 0;
  arr.forEach(e =>  {if(e) count++;});
  return count;
}
// console.log(countTruthy([1,2,3,0, null, undefined, NaN]));

//showProperties function with parameter, obj
//outputs properties and their values to console IF they are string data type
const movie = {
  title: 'a',
  releaseYear:2019,
  rating: 4.5,
  director:'b'
};
function showProperties(obj){
  for(let key in obj)
    if (typeof obj[key] === "string") console.log(`${key}: ${obj[key]}`);
}
// showProperties(movie);


//sum function with limit parameter, type int
//returns the sum of all multiples of 3 and 5 up to this limit
//10 can be used as number to test, the multiples are 3,5,6,9,10, and sum is 33
function sumOfMultiples(limit){
  let sum = 0;
  for(i = 0; i < limit+1; i++)
    if(i % 3 === 0 || i % 5 === 0) 
      sum += i;
  
  return sum;
}
// console.log(sumOfMultiples(10));



//calculateGrade function with marks parameter
//marks is array of integers ranging from 1-100
//compute average and output grade based on scale below:
//1-59: F, 60-69: D, 70-79: C, 80-89: B, 90-100: A
function calculateGrade(scores){
  //calculate average
  let sum = 0;
  scores.forEach( s => sum += s);
  let average = sum/scores.length;
  
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}
// const marks = [80,80,50];
// console.log(calculateGrade(marks));


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
// (showStars(5));


//showPrimes function with limit parameter: int
//console.log all prime numbers up to limit
//save for arrow function and es6 refactoring practice


//create Address object with object literal syntax
//public properties:
//street
//city
//zipcode
//methods:
//showAddress(), displays all properties of this object with their value
const address = {
  street: "1234 berkeley pkwy",
  city: "fortville",
  zipcode: "23456",
  showAddress() {
    console.log(`street: ${this.street}
    city: ${this.city}
    zipcode: ${this.zipcode}`);
  }
}


//create Address object with factory function and with constructor function with
//public properties:
//street
//city
//zipcode
//methods:
//showAddress(), displays all properties of this object with their value

//factory function
function createAddress(street, city, zipcode){
  return{
    street,
    city,
    zipcode,
    showAddress(){
      console.log(`street: ${street}
    city: ${city}
    zipcode: ${zipcode}`);
    }
  }
}
//constructor function
function Address(street, city, zipcode){
  this.street = street,
  this.city = city,
  this.zipcode = zipcode
  this.showAddress = function(){
    console.log(`street: ${this.street}
  city: ${this.city}
  zipcode: ${this.zipcode}`);
  }
}


//create two functions
//areEqual(address1, address2), returns true if all properties are equal, otherswise false
//areSame(address1,address2), returns true if references are equal, otherwise false
 let someAddress = new Address('a','b', 'c');
 let anotherAddress = new Address('a','b','c');

function areSame(address1, address2){
  return address1 === address2;
}

function areEqual(address1, address2){
  //check for length
  if(Object.keys(address1).length !== Object.keys(address2).length) return false;

  //check for equality, outputs false if properties that are not functions are not equal
  for(let key in address1)
    if (typeof address1[key] !== "function")
      if(address1[key] !== address2[key])
        return false;
  
  return true;
}



//use object literal syntax to construct and initialize BlogPost object w/ properties:
//title, body, author, comments array with comment object with author and body properties, views, isLive
// const blogPost = {
//   title: "",
//   body: "",
//   author: "",
//   comments: [
//     { author: "",
//     body: ""
//     },
//     { author: "",
//     body=""
//     }
//   ],
//   views: 0,
//   isLive: false
// };


//create BlogPost object with properties above using constructor function
//scenario in which the user has drafted the post but not completed
function BlogPost(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.comments = [];
  this.views = 0;
  this.isLive = false;
}


//***********************/
//  WORKING WITH ARRAYS //
//***********************/


//create function arrayFromRange with parameters, min and max
//min and max are numbers and max has to be greater than or equal to min
//outputs array with numbers starting from min to max in ascending order
function arrayFromRange(min, max){
  let output = [];

  for(let n = min; n <= max; n++)
    output.push(n);

  return output;
}
// console.log(arrayFromRange(0,5));


//create function includes with parameters, array and searchElement
//returns true if number found in array, otherwise false
//can't use built in includes function
function includes(array, searchElement){
  for(let number of array)
    if(number === searchElement)
      return true;
  return false;
}
// console.log(includes([1,2,3], 3));


//create function except with parameters, numbers array and excluded arrays, both are number data type
//returns an array with difference of array numbers and excluded, (output = numbers - excluded)
function except(array, excluded){
  return array.filter(n => !excluded.includes(n));
}
// console.log(except([1,2,3], [6,3,2]));


//create function countOccurences with parameters array: numbers, searchElement: number 
//returns number of times search element has occurred in array
//use reduce method 
function countOccurences(numbers, searchElement){
    return numbers
            .reduce((accumulator, currentValue) =>{
              const occurence = (currentValue === searchElement) ? 1 : 0;
              return occurence + accumulator;
            }, 0);
}
// console.log(countOccurences([1,2,3,1], 1));


//create function getMax with parameters array: numbers
//returns max number using reduce method
//return undefined if empty array given as input
function getMax(numbers){
    if(numbers.length === 0) return undefined;
    return numbers.reduce((a, b) => (a > b) ? a : b);
}
// console.log(getMax([1]));

//using array below...
// get all movies in 2018 with rating >4
//sort them by their rating
// sort in descending order
//pick their title and log to console
//output should be: b a
const movies = [
  {title: "a", year: 2018, rating: 4.5},
  {title: "b", year: 2018, rating: 4.7},
  {title: "c", year: 2018, rating: 3},
  {title: "d", year: 2017, rating: 4.5}
]
 const output = movies
                  .filter(m => m.year === 2018 && m.rating > 4)
                  .sort((a,b) => (a.rating < b.rating) ? 1 : -1)
                  .map(m => m.title);
// console.log(output);


//create function sums, with optional number of parameters OR array of numbers
//returns sum
//use isArray() method to detect if numbers were passed or array
function sums(...numbers){
  return (Array.isArray(numbers[0])) ? numbers[0].reduce((a,b) => a + b) : numbers.reduce((a,b) => a + b);
}
// console.log(sums([1,2,3,4,5]));
// console.log(sums(1,2,3,4,5));


//create Circle object using object literal syntax
//radius property that we can read or write to
//area property that is read-only  
const circle = {
  radius: 0,
  get area(){ return Math.PI * this.radius**2}
}
// circle.radius = 3;
// circle.area=20;
// console.log(circle.area);


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
try{
  // console.log(countElements(null, 1));
}
catch (error){
  // console.error(error);
}





















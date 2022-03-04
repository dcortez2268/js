/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

//On^2 complexity
let nums= [3,3];
let target = 6;

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        
        for (let j = i +1; j< nums.length; j++)
            if(diff - nums[j] === 0 ) return[i,j];
    }
};
// less than O(n2) time complexity? 

/*
map filter reduce practice: 
    Square the value of every element in the array.
    Presume that you will only get numbers in the input array.
    input = const input = [ 1, 2, 3, 4, 5 ];
    result = [ 1, 4, 9, 16, 25]
*/
let input = [1,2,3,4,5];
const squareValue = (array) => {
    return array.map( e => e * e);
}
let result = input.map(e => e * e);
// console.log(result);
// console.log(squareValue(input));
/*
map filter reduce practice: 
    If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
    input = const input = [ 1, -4, 12, 0, -3, 29, -150];
    result = 42
*/
input = [ 1, -4, 12, 0, -3, 29, -150];
result = input.reduce(( acc, curr) => {
    if(curr > 0) return acc+ curr ;
    return acc;
},0);
/*map filter reduce practice: 
    Calculate the mean and median values of the number elements from the input array.
    input = const input = [12, 46, 32, 64];
    result = { mean: 38.5, median: 32 }
*/
input = [12, 46, 32, 64];
input.sort((a,b) => a -b);
let middleIndex = (input.length % 2 === 0) ? input.length / 2 - 1 : Math.floor((input.length/2));

result = input.reduce((acc, curr, index) =>{
    //calculate mean
    acc.mean += curr / input.length;
    //calculate median
    if (index === middleIndex) acc.median = curr;
    
    return acc;
}, {mean: 0, median: 0}); 
/*map filter reduce practice: 
    The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
    input = "George Raymond Richard Martin";
    result = "GRRM"
*/
input = "George Raymond Richard Martin";

result = input
.split(" ")
.map( w => w.charAt(0))
.join("");
/*map filter reduce practice: 
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
const input = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
  ];
  result = [13, 67, 54]
  */
 
 //map each person object to array with just ages
 //use math.min on array to find smallest age
 //use math.min on array to find oldest age
 //find difference and push to array
 input = [
     {
         name: 'John',
         age: 13
        },
        {
            name: 'Mark',
            age: 56,
        },
        {
            name: 'Rachel',
            age: 45,
        },
        {
            name: 'Nate',
            age: 67,
        },
        {
            name: 'Jeniffer',
            age: 65,
        }
    ];
    let ages = input.map(p => p.age);
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    const diff = max- min;
result = [min, max, diff];
/*map filter reduce practice: 
    Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e
    input = 'Every developer likes to mix kubernetes and javascript';
    result = 'E3y d7r l3s to mix k8s and j8t'
*/
input = 'Every developer likes to mix kubernetes and javascript';
result = input
    .split(" ")
    .map( w => {
        if(w.length > 3){
            return `${w.slice(0,1)}${w.length - 2}${w.slice(-1)}`;
        }
        return w;
    })
    .join(" ");
/*map filter reduce practice: 
    If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
    const input = 6;
    result = 720;
*/
input = 6;
result = [...Array(input).keys()]
.map(x => x+1)
.reduce((acc, curr) => curr *acc);
/*map filter reduce practice: 
    Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
    const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
    result = {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }
*/
input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
result = input
            .flat()
            .reduce((acc, curr) => {
                (acc.hasOwnProperty(curr)) ? acc[curr] += 1 : acc[curr] = 1;
                return acc;
            }, {});
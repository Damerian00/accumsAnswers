/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been completed for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/

function sum(arr){
    let a=0;
    for(let i=0; i < arr.length; i++){
        a += arr[i]
    }
    return a;

}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/


function doubleLetters (str){
    // let a =str.split('');
    // let b =[]
    // for (let i =0; i < a.length; i++){
    //     b.push(a[i]);
    //     b.push(a[i]);
    // }
    // return b.join('')
    if (str.length == 0){
        return str;
    } else {
        return str.split('').map(i => i + i).join('');
    }
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/


function doubleNumbers(arr){
if (arr.length == 0){
    return arr;
} else {
    return arr.map(i => i*2);
}

}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers (arr, num){ 
        return arr.map((arr) => arr * num);
       
    
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/



function interleave(arr1, arr2) {
    let a = []
    
    if (arr1.length == 0){
        return arr1;
    }else {
        for (let i=0; i < arr1.length; i++){
            a.push(arr1[i]);
            a.push(arr2[i]);
        }
        return a;
    }


}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/


function createRange(num, val){
    let a= [];
    if (num.length == 0){
        return num
    } else{
        for (let i=0; i < num; i++){
            a.push(val);
        }
        return a;
    }
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(arr){
   let obj = {};
    for (let i=0; i < arr.length; i++){
    obj[arr[i]] = i;
   }
   return obj;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/


function arraysToObject(arr1){
let obj = {}

for (let i=0; i < arr1.length; i++){
 
    obj[arr1[i][0]] = arr1[i][1];
}

   return obj;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/


function reverseString(str){
// console.log(str.split('').reverse().join(''))
//     return str.split('').reverse().join('')
let a=[]

if (str.length == 0){
    return str;
}else {

    for(let i =0; i < str.length; i++){
       a.unshift(str[i])
      
    }
    
        return a.reduce((prev,curr) => prev + curr)
}
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/


function repeats(str){
    if(str.length == 0){
        return true;
    } else if((str.length % 2) == 1) {
        return false;
    } else {
        let mid = (str.length)/2
        let a = str.slice(0 , mid)
        let b = str.slice(mid)
        return (a == b ? true : false);       
        }
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(str){
    
    let a= []
    if (str.length == 0){
        return str;
    } else {
        for (let i=0; i < str.length; i++){
            (i % 2) == 0 || i == 0? a.push(str[i]) : i;
        }
        return a.join('');
    }

}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/


function allEqual(str){
    let a =str.split('')
    let match = (curr) => curr == a[0];
    if (str.length == 0){
        return true;
    }else {
        return a.every(match);
    }
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 12
*/


function sumLetters (str){
    if (str.length == 0){
        return str.length;
    }else {
      return str.split('').map(x => parseInt(x)).reduce((prev, curr)=> prev + curr);
    }
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(str){
    let regex = /[AEIOU]/gi;
    let found = str.match(regex);
    if (str.length == 0){
        return 0
    } else {
     return found.length;
    }
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(str){
let a=[];
    for (let i=0; i<str.length; i++){
        a.push(str[i]);
    }
        return a;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(str){
    let a = []
    for (let i=0; i<str.length; i++){
        a.push(str.codePointAt(i))
    }
    return a
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(str){
    let obj ={}
    
    //    for (let i=0; i < str.length; i++){
    //             obj[str[i]] = i;
    //         }
        obj = str.split('').reduce((acc,cur, i) => {
            acc[cur] = i;
            return acc}, {})
        
    return obj;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/


function letterCount(str){
let arrs= str.split('')   
let count = 1;
let a= {}
arrs.forEach((arr)=> {
  if (Object.keys(a).includes(arr)){
    let temp = a[arr];
    a[arr] = temp + count
  }else {
      a[arr] = count
      count = 1;
  }

})
  return a;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,3 it should return false because the only number between 0 and 3 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/


function threeOdds(a,b){
let num = b-a;
let odd = 0;
let tempArr = [];
for (let i = 0; i < num; i++){
    tempArr.push(i);
}
tempArr.forEach((temp) => {
    temp % 2 == 1? odd ++ : odd;
})
if (odd >= 3){
 return true
}
return false;

}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/


function leftPad(str, num, char){
    if (str.length > num){
        return str
    } else {
        let arr = str.split('')
        while (arr.length < num){
            arr.unshift(char);
        }
        return arr.join('');
    }



}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/


function createString(num, let){
    let a = ""
    while (a.length < num){
        a += let
    }
    return a
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial(num){
let arr = []
if (num == 0){
    return 1;
}
for (let i=1; i < num + 1; i++){
    arr.push(i)
}
 let b = arr.reduce((acc,cur) => acc * cur);
   return b; 
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(num){
let a=[]
for (let i=1; i < num +1; i++){
    a.push(i)
}
return a

}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/


function evenOdd(num, num2){
let a= {}
if (num == 0 && num2 == 0){
return a
} 
for (let i=num; i<num2+1; i++){
    i % 2 == 0? a[i] = 'even': a[i] = 'odd'
}
return a;
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/


function growingKeys(num, str){
  let k='';
    let a= {}
if (num == 0){
    return a;
} else {
    for (let i=0; i<num; i++){
        k += str
        a[k] = true
    }
}
return a;
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(arr,char){
let temp= [];
if (arr.length==0){
        return true;
    }
for (let i =0; i<arr.length; i++){
    if (arr[i] == char){
        temp.push(true)
    }else{
        temp.push(false)
    }
}
    if(temp.includes(false)){
        return false;
    }else{
        return true;
    }
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/


function some(arr, val){
    let temp= [];
if (arr.length==0){
        return false;
    }
for (let i =0; i<arr.length; i++){
    if (arr[i] == val){
        temp.push(true)
    }else{
        temp.push(false)
    }
}
    if(temp.includes(true)){
        return true;
    }else{
        return false;
    }

}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/


function toSentence(arr){
console.log('this is arr', arr)
let len = arr.length -1
arr.splice(len,0,'and')
console.log('this is s', arr)

}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/














/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/









//

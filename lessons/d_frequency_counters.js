// * Frequency Counters
// ! Review this 

// This pattern uses objects or sets to collect values/frequencies
// Useful for taking objects or sets of data to compare them to see if they have similar values
// for instance
// if they are ANAGRAMS
// if a value is contained inside another value
// two imputs or more than two

// This can often avoid the need for nested loops or O(N^2) operations with arrays or strings


//Example
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Clarifications/Questions to ask in an interview/whiteboarding setting:
// the challange output MUST contain the same frequency of squared values in the second array. It can't just check if the array contains a squared value, but every squared value.

same([1,2,3], [4,1,9]) //true
same ([1,2,3], [1,9]) //false
same([1.2,1], [4,4,1]) //false, (must be the same frequency)

// ! this is not the best solution!
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}

same([1,2,3,2], [9,1,4,4])

// Anagrams
// Given two strings, write a function to determine if the secon dstring is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as
// cinema
// formed from
// iceman

// validAnagram('', '') //true
// validAnagram('aaz', 'zza') //false
// validAnagram('anagram', 'nanaram') //true
// validAnagram('rat', 'car') //false
// ...etc

// instead of taking this naive approach, we can increase the effeciency of the bigO by:
// * looping over each array, one time, individually
// instead of looping over the first array and checking for each value in the nested sub array
// two loops are vastly better than two nested loop
//seprate loops o(n) 
//better than 
// nested loop o(n)^2


function sameSame(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2);
  return true
}

sameSame([1,2,3,2,5], [9,1,4,4,11])

// the  idea of the frequency counter is usually-
// use an object to construct a profile, a way of breaking down the contents of an array or string
// then
// quickly compare that breakdown to how another breakdown looks

// take the array/string, turn it into an object, compare those two objects with two seperate loops
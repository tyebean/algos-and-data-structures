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

same([1,2,3]), [4,1,9] //true
same ([1,2,3], [1,9]) //false
same([1.2,1], [4,4,1]) //false, (must be the same frequency)

// !this is not the best solution!
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

validAnagram('', '') //true
validAnagram('aaz', 'zza') //false
validAnagram('anagram', 'nanaram') //true
validAnagram('rat', 'car') //false
// ...etc


// Some Patterns
  // Frequency Counter
  // Multiple Pointers
  // Sliding Window
  // Divide and Conquer
  // Dynamic Programming
  // Greedy Algorithms
  // Backtracking

// * Frequency COunters

// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays or strings

//Example
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3]), [4,1,9] //true
same ([1,2,3], [1,9]) //false
same([1.2,1], [4,4,1]) //false, (must be the same frequency)

// the challange output MUST contain the same frequency of squared values in the second array. It can't just check if the array contains a squared value, but every squared value.








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


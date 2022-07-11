// suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
  total += i;
  }
  return total
}
console.log(addUpTo(6));

function addUpTo2(n) {
  return n * ( n + 1 ) / 2;
}
console.log(addUpTo2(6));

//Which one is better?
//What is better? Speed, less memory-intensive? Most legible?
//Depends on the project, but speed and memory is most important

//You can check the speed of your code-- not very reliable though, because every machine will compute these functions differently 
  //The SAME machine can record time differently too so there's that
//It can also difficult to quantify

//Instead of computing the amount of seconds that it takes for a function to run, we can count the amount of operations that are happening.

//There are 3 calculations/simple operations that are happeniong in addUpTo2

//In addUpTo, there are n operations. We don't want to focus on how many operations this one does, because it changes as n changes since this function contains a LOOPY LOOP. That's kind of aweful!
//If n is 20, we'd loop over 20 -- 20 times. 🙀🙀🙀

// ---------------------------------------------------

// Introducing Big O Notation
// Big O allows us to formally talk about how the runtime of an algo grows as the inputs grow
// Big O Notation talks about the worst case

// addUpTo2 always has 3 operations O(1)
// addUpTo has a number of operations that is always bounded by a multipul of n (say,  10n) -- O(n)

//Another example of 0(n)

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log("i is", i);
  }
  console.log("At the top! Going down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log("j is", j);
  }
  console.log("At the bottom. Bye!");
}
console.log(countUpAndDown(11));

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log("Printing all Pairs!", i, j);
    }
  }
}
console.log(printAllPairs(5));

// O(n+10) 👎     O(n) 👍🏽
// O(1000n + 50) 👎      O(n) 👍🏽
// If we zoom out all the way out as far as we could possibly go--
//For instance, imagine we plug in 1 Billion for n
  //multiplying 1000 by n wouldn't matter
  //adding 50 wouldn't matter
// We can shorten it because smaller terms don't always matter when talking about Big O

// 1. Arithmetic operations are constant runtime and take roughly the same amount of time
  // 2 + 2 
  // 1,000,000 + 2

// 2. Variable assignment is constant runtime
// let x = 1,000,000
// let x = 1
// let arr = [1, 2, 3, ..., 1,000,000]

// 3. Accessing elements in an array (by index) or object (by key) is constant runtime

// 4. In a loop, the complexity is the length of the loop times the complexity of whever happens inside of the loop

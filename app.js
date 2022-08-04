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

//You can check the actual speed/time it takes to run your code in miliseconds-- not very reliable though, because every machine will compute these functions differently 
  //The SAME machine can record time differently too 
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


// ----- SPACE COMPLEXITY -----

// Otherwise known as auxiliary space complexity
// refers to the space required by the algo
// not including the space taken up by the inputs

//unless otherwise noted, when we discuss space complexity in these lessons, we'll be talking about auxiliary space complexity

// Javascript Space Complexity rules of thumb
// most primatives are constance space (booleans, numbers, undefined, null)
// strings require O(n) space where n is string length 
// reference types are generally o(n) where n is the length (for arrays) or the number of kets (for objects) 

// this example focuses on SPACE complexity

function spaceSum(arr){
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(spaceSum([1, 2, 3]));

// so this function takes up constant space
//we have two numbers
// the total and the i in the for loop

function double(arr){
  let newArr = [];
  for(let i =0; i<arr.length; i++){
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
console.log("Space Complexity Double", double([1, 2, 3]));

// the new array is being set
// the new array becomes longer and longer in accordance to the input
// O(n) space

// ----- Logarithm Complexity -----

// log time complexity is great
// with constant time being the best --> 0(1) ...
// ... O(log n) is pretty good too

// while
// O(n log n)
// is NOT the absolute best
// it's actually one of the two worst
// it's ranks better than 
// O(n^2)
// with O(n^2) being the stinkiest

// ? Where will logarithmic time complexity show up? ------------ 
// - Certain search algorithms
// - Efficient sorting algorithms
// - Recursion sometimes involves logarithmic space complexity

// ------- Big O Notation Recap --------

// We use Big O to analize the preformance of an algorithm

// We use Big O Notation to give us a high level understanding of the time or space complexity of an algorithm

// Big O Notation cares about general trends. 
// Is the algorithm linear, quadratic, constant?

// Big O depends only on the algorithm and not the machine running the algorithm, like when thinking about how fast it takes to compute an algo

// --- The Big O of Objects ---

let ally = {
  firstName: "June",
  isElf: true,
  favoriteNumbers: [1,2,3,4]
}
console.log(ally);

// In the context of Big O
// Objects work well when u dont need order
// You don't need fast access, incertain, removal, accessing data

// JS can add, store, and retrieve, update, and remove something in constant time

// Insertion - o(1)
// Removal - o(1)
// Searching - o(n)
// Access - o(1)

Object.entries(ally)
// o(n)
// grows exponentially in relation to n
ally.hasOwnProperty("firstname")
// returns true
// is constant time
// o(1)

// objects are #basic
// all constant time aside from searching so it's o(n)

// Big O of Object Methods

// Object.keys - o(N)
// Object.values - o(N)
// Object.entries o(N)
// hasOwnProperty o(1)

// ------ Big O of Arrays ------

// Ordered lists!

let names = ["Tye", "Jacob", "Lexie", "Dylan"];
// those are my room mates ^^ :)

let values = [true, {}, [], 2, "awesome"];

// Arrays are ordered by nature
// It's good if we need order
// Can be costly for some of these operations

// if you're just trying to store data, objects would be better preformance wise

// *** !!! i can apply this to things i have learned while enrolled at GA !! ...
// ... we worked with APIs, which most commonly used objects to store data
// i remember we were playing with APIs after class and we voted on using an Animal Crossing New Horizons API. That API used arrays instead of objects and our instructor (shout out to Ben) went OFF 

// O.K. back to arrays tho

// when you search through an array using an index, u can just jump right to that index

// with arrays, however, things can become tricky when 
// inserting
// and
// removing

// things from the array

// Insertion - it depends
// Removal - it depends
// Searching - o(n)
// Access - o(1)

// inserting at the end of the array is fiiiine
// it happens just like it would an object

// BUT !! inserting at the beggining of an array can be cumbersome

// the problem is with the indecies 
// we have to reindex ever single element in the array

// insert and removal @ end o(1) time
// insert and removal @ front o(n) time

// it shouldnt be avoided, it's just good to be aware of this change

// push and pop are faster than shift and unshift

// ---- Array Methods ----
// because why not

// push - o(1) constant 
// pop - o(1) constant
// shift - o(n) have to reindex everything
// unshift - o(n) have to reindex everything
// concat - o(n) linear
// slice - o(n) linear
// splice - o(n) linear
// sort - o(n*log N)
// forEach/map/filter/reduce/ect - o(n)

//logarithms

//"waiiit, what's a log?"

// log2(8) = 3 -----> 2^3
//log₂(value) = exponent ----> 2^exponent=value

// we'll omit the subscript #2
//so basically
// log === log₂

// "this isn't a math course, so here's a rule of thumb"

// "the logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one."

// Logarithm Examples

// say you have the number 8
// 8 divided by 2
// u get 4
// 4 divided by 2
// u get 2
// 2 divided by 2
// u get one

//you do that process three times
// ... 'that process' being, dividing by 2

//so the log is 
//log(8)=3

//logarithmic time complexity is great!

// Why do we care about logarithms?

// -- Certain searcing algos have logarithmc time complexity
// -- Effcient sorting algorithms involve logarithms
// -- Recursion sometimes involves logarithmic space complexity
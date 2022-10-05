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

// * Where will logarithmic time complexity show up? ------------ 
// - Certain search algorithms
// - Efficient sorting algorithms
// - Recursion sometimes involves logarithmic space complexity

// ------- Big O Notation Recap --------

// We use Big O to analize the preformance of an algorithm

// We use Big O Notation to give us a high level understanding of the time or space complexity of an algorithm

// Big O Notation cares about general trends. 
// Is the algorithm linear, quadratic, constant?

// Big O depends only on the algorithm and not the machine running the algorithm, like when thinking about how fast it takes to compute an algo

// ? SECTION 3 - Analizing Preformance of Arrays and Objects

// Understand how objects and arrays work, through the lense of Big O
// Explain why adding elements to the begining of an array is costly
// Compare and contrast the runtime for arrays and objects, as well as built in methods [ex. ...forEach]

// We're just applying what we already know about Big O to something tangible

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

// ?  Logarithms and Section 2 Recap

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

// *** Section 4: Problem Solving Approach


// ?? Introduction to Problem Solving

// Objectives
// @ define what an algo is
// @ devise a plan to solve algorithms
// @ compare and contrast problem solving patterns including
  // -- frequency counters
  // -- two pointer problems
  // -- divide and conquer

// what is an aglorithm?
// a process or set of steps to acomplish a certain task.
// examples
// a supppper cool algorithm used to make the vibrations in a toothbrush! woooow
// the algorithms that facebook uses to give us ads
// google's search algorithms -- probably 100 developers working together to refine a search algorithm
// just a set of steps to acomplish a task
// instagram's algorithm to show you posts in chronological order, which they changed and now you get to miss all of your friend's posts!

// Why do I need to know this?
// Almost everything you do in programming involves some sort of algorithm! 
// it's the foundation for being a successful problem solver and developer
//it's also important for
// INTERVIEWS!

// How do you improve?
// this course is structured around how to improve
// it comes naturally to some people, and other people need to work at it
// one of this guy's clients had a panic the first time he had to solve a new problem, then 2 weeks later, sat down quietly and calmly to solve the problem. 
//*  a two week turn around is super inspiritng! * 

// ! resourse
// a lot of these strats are adapted from George Polya, whose book
// How to Solve It
// is a great resouse for anyone who wants to become a better problem solver

// * Step 1: Understand the Problem

// can you restate the problem in your own words? 
// make it make sense to yourself and to others?
// what are the inputs and outputs 
// do we have enough info to some the problem?
// how should i label important peices of data that are part of the problem

// Write a function which takes two numbers and returns their sum

// 1. restate in your own words, make sure you understand the problem
// 'impliment addition'
// 'add two numbers together'

// 2. then ask yourself - what are the imputs that go into the problem? 
// here, we can ask a lot of different questions:
  // personal note: 
    // these questions might not be too important to ask for this specific problem, but it's important to show that you're cognisent of these questions and possibilities! 
// what happens if one of the inputs is blank?
// is there a min and max for the number, ie, can this be a 1 or 1,000,000 diget number?
// what happens if javascript gives up and returns 'infinity'?
// can/should this be a 'float'?
// can we return a string if we're doing massive addition?

// 3. what are the outputs that should come from the solution to the problem?
// integer? string? float?(?)
// undefined? null?
// some interviewers might tell you to ignore that part.

// 4. how should i label the pieces of data that are part of the problem?


// **  Step 2: Concrete Examples
// Examples can provide sanity checks that your eventual solution actually works how it should
// User stories!
// Unit Tests - used to lay out how smaller things should work for a new feature

// start with simple examples
// now that you understand the problem, write a few simple examples with an input and an output
// they're good to look back at
// progress to more complex examples
// explore empty inputs - give a good feel for how edge cases could work
// real world - think about what happens when a user inputs something that is invalid

// Example to work with:
// "Write a function which takes in a string and returns counts of each character in the string."

// my example for an example return
charCount("aaaa") // {a:4}
// this already makes us think of some questions:
// should we just have {a:4}, or should we have the entire alphabet set to zero, so that we can just tweak the characters that are included?
charCount("hello") // {h:1, e:1, l:2, o:1}
// that would be an example of a question that we could try to clairify 

// *** Step 3: Break it Down

// before we start writing code, we can break it down
// take actual steps of the problem and write them down
// doesn't have to be complete pseudocode
// just write little comments
// "here are the steps i am going to try to take."
// ask for hints or tips
// "do you think that would work?"

// this forces you to actually think about the code before you write it
// clear up any questions or misunderstandings

// write a function which takes in a string and returns counts of each character in the string.
charCount('aaa')
charCount('Your PIN number is 1234!')

let expectedOutput = { 
  1: 1, 
  2: 1, 
  3: 3,
  4: 1,
  o: 1,
  b: 1,
  m: 1,
  // etc...
}

// we/our interviewer has decided that uppercase letters in this problem don't matter

function charCount(str){
  // do something
    //make object to return in the end
    //loop over string
    //return object at end
  // return an object with keys that are lowercase alphanumeric characters in the string
}

// the bulk of the logic in this problem involves looping over every item in the object
// check if there are any of the same elements in our initial object already
// we start off with an empty object, so it's going to add a Y for 'your PIN is 1234!'
// and set y to 1
// if statement:
  // if the char is [[number/letter]] AND a key in the object, add one to count
  // if the char is a [[number/letter]] not in object, add it to the object and set value to 1
  // if the character is something else, (space, period, etc.) don't do anything

// return object in the end

// this domonstrates to the interviwer that you know how to bust it down
// if we get the problem wrong, we can show that we had the right idea
// you don't need to finish the problem or get the correct return value in the end
//it's all about the process

// **** Step 4: Solve or Simplify

//solve the problem if you can
// if you can't, solve a simpler problem

//what this really means is: try to ignore the part of the problem that you're stuck on
//you want to show something of yourself

//even if you know that theyre's some part of the problem that you might get stuck on, skip to the part of the problem that yopu DO understand and solve that FIRST so that tyou can actually get some code down (on paper) but not really on paper lol

// for example:

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
    // if the char is a number/letter AND is a key in object, add one to count
    // if char is a numbner/letter AND not in object, add it to obejct and set value to 1
    // if character is something else (space, period, etc.) don't do anything
  //return obejct and the end
}

// if, as the interviewee, i get stuck on one of two things:
  // working with objects and key value pairs
  // or
  // working with a loop
// i could put my focus on either MAKING the object or MAKING the loop work

// if i were working with the object to start off with, i could go ahead and create an object just hard-code in the first five characters in the object
// then i could add lowercasing to all of the characters, since we are not focused on those uppperccased letters right now
// i could also code out the IF statement, probably
// and then, testing the little bit of code i have, i could then find a pattern that would then
// allow me to start thinking about the loop

// ***** Step 5: Look Back and Refactor
// Recap and interview Strategies

// *** Section 5: Problem Solving Patterns



// ***** PROBLEM SOLVING STEPS RECAP *****
// *-------------------------------------*
// * Make sure you understand the problem
// ask questions
// understand inputs/outputs
// cover edgecases/errors
// "what if a user provides an invalid input?"
// understand how your solution should function
// * Explore Concrete Examples
// start with simple examples
// make a bite-sized version of your function, inoput, and output. 
// Ex.
// "Write a function which takes in a string and returns counts of each character in the string."
charCount("hello") // {h:1, e:1, l:2, o:1}
// Progress to more complex examples
  // explore examples with empty inputs
// * Break it Down
// stub ub a function
// doesn't have to be complete pseudocode
// just write little comments
// know where you're going before you start coding
// clear up any misunderstandings
// * Solve and Simplify
// if you're not sure about a specific part, ignore it
// work on the part that you do know
// ask for clarifications
// plug in the unknown part later
// * Look Back and Refactor
// reflect on your own challange
// use other people's code to see how it could be better
// take note of whether or not your solution was the best
  // mention/point to other solutions that could be better in a time/space complexity sense 
// ***** END OF PROBLEM SOLVING STEPS RECAP *****
// *-------------------------------------*
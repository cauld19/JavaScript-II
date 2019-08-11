// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = 'christian';
function returnChristian () {
  return name;
}

returnChristian();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
 // Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  let count = 0;
  return function() {
    //count = count + 1;
    return ++count;
  }
};
let newCounter = counter();
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

// const counterFactory = () => {
//   let count = 0;
//   return {
//     increment: function() {
//       return ++count
//     },
//     decrement: function() {
//       return --count
//     } 
//   };
// };

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count
  };
};

let newCounterFactory = counterFactory();

newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
newCounterFactory.increment();
console.log(newCounterFactory.decrement());



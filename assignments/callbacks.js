// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook'];

 

//   // Given this problem: 
  
//   function firstItem(arr, cb) {
//     // firstItem passes the first item of the given array to the callback function.
//   }

//   // Potential Solution:

//   // Higher order function using "cb" as the call back
//   function firstItem(arr, cb) {
//     return cb(arr[0]);
//   }

//   // Function invocation 
//   firstItem(items, function(first) {
//     console.log(first)
//   });




// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
//   return cb(arr.length);
// }

// getLength(items, function(item) {
//   console.log(item);
// });

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
//   return cb(arr[arr.length- 1]);
// };

// last(items, function(last) {
//   console.log(last);
// });

// function sumNums(x, y, cb) {
//   return cb(x + y);
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

// sumNums(5, 6, function(sum) {
//   console.log(sum);
// });

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
//   return cb(x * y);
// }

// multiplyNums(5, 6, function(result) {
//   console.log(result);
// });

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
//   for (let i = 0; i < list.length; i++) {
//     if(item === list[i]) {
//       return cb(true);
//     } else {
//       cb(false)
//     }
//   } 
// };
   

// function contains(item, list, cb) {
//   for (let i = 0; i < list.length; i++) {
//     if (item == list[i]) {
//       return cb(true);
//     }
//   }
// }

// contains('yo-yo', items, function(answer) {
//   console.log(answer);
// })






/* STRETCH PROBLEM */
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.


const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook', 'yo-yo', 'cup'];
newArray = [];

function removeDuplicates(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if(newArray.indexOf(array[i]) === -1){
      newArray.push(array[i]);
    }
  }
  return cb(newArray);
}





removeDuplicates(items, function(a) {
  console.log(a);
});

// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const eatsFunctions = function(x, y, cb){
  return cb(x, y);
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

 function add(x, y){
  return x + y;
};

function multiply(x, y){
  return x * y;
};

function greeting(x, y){
  return `Hello ${x} ${y}, nice to EAT YOU (i am of the comedic genius)`
};
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(eatsFunctions(2,2,add)); // 4
console.log(eatsFunctions(10,16,multiply)); // 160
console.log(eatsFunctions("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// i can't explain it's just magical. 
// May as well be witchcraft. 
// Humans are wizards who tricked rocks into thinking, explain THAT. 
// CAN'T. 
// It's m a g i c

// ok actual explanation:
// closure is what you hope for after divorce

// at the top level of JavaScript is an all-ecnompassing, 'global' scope.
// every function that is created burrows down into the document and creates it's own 'local' scope
// objects at the local scope can pull in data from the global scope, but the reverse is not true
// as functions nest further down into other functions, the rule continues. 
// functions nested inside functions can grab data from outside it's own scope, but the upper function cannot grab data from the NESTED function's local scope.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
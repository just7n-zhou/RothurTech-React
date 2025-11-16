// Global scope

var globalVar = "I am global";

function accessGlobal() {
  return globalVar;
}

// console.log(accessGlobal()); // Expected output?
// "I am global"
// console.log(globalVar);      // Expected output?
// "I am global"

// Local scope
function localScope() {
  var localVar = "I am local to this function";
}

// localScope();
// console.log(localVar); // What happens here and why?
// Reference error, localVar not defined. Since it's only visible to function localScope.

// Block scope
if (true) {
  let blockVar = "I exist inside this block only";
  const blockConst = "So do I!";
}

// console.log(blockVar); // What is the result and why?
// console.log(blockConst); // What is the result and why?
// Both get reference error, variable not defined, since let and const are block scoped

// Function scope vs block scope
function loopScope() {
  for (var i = 0; i < 3; i++) {
    // console.log(i); // Outputs during loop?
    // 0, 1, 2,
  }
  // console.log("After loop with var: " + i); // What happens here?
  // print "After loop with var: 3", since var is function scoped, so it still exits inside the function

  for (let j = 0; j < 3; j++) {
    console.log(j); // Outputs during loop?
  }
  // console.log("After loop with let: " + j); // What happens here?
  // Reference error since let and const are block scoped, it lives inside the for loop and not visible outside the loop
}

loopScope();

export function sum(a = 0, b = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if(typeof a !== 'number' || typeof b !== "number"){
    throw new Error("Both input should be number")
  }

  return a + b;
}

export function sumOfAll(...args) {
  // write a function that takes any number of arguments and returns their sum
  // if wrong data type is passed, throw an error
  // Define your function here
  let total = 0;
  for(let i = 0; i < args.length; i++){
    if (typeof args[i] !== 'number'){
      throw new Error("All input should be number")
    }
    total += args[i];
  }
  return total;
}

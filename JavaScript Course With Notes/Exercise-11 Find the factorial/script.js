// using for loops
// let factorial = 1;
let user_input = parseInt(prompt("Enter number"));
// for (let i=1;i<=user_input;i++){
//     factorial *= i;
// }


// console.log(factorial)

// Using reduce methods


function factorial(number){
   let arr = Array.from(Array(number+1).keys())// short for loop for arrays you can use for loop with syntax
   let c = arr.slice(1).reduce((a,b) => a*b)
   return c
}
console.log(factorial(user_input))


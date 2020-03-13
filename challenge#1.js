/**
 * Project Euler: Problem 1: Multiples of 3 and 5
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below the provided parameter value number. 
 * **/

function multiplesOf3and5(number) {
   
    // create an array of size "number" (.from() & .keys())
    // filter it so it only contains multiples of 3 and 5
    // reduce it to array elements sum
    return Array.from(Array(number).keys()).filter(num => num%3==0 || num%5==0).reduce((a, b) => a + b, 0);
    
}
  
// tested on https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
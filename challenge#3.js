/**Project Euler: Problem 3: Largest prime factor
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the given number?
 * */

function largestPrimeFactor(number) {
    let primeFactors = [];
      while (number % 2 === 0) {
          primeFactors.push(2);
          number = number / 2;
      }
      
      var sqrtNum = Math.sqrt(number);
      for (var i = 3; i <= sqrtNum; i++) {
          while (number % i === 0) {
              primeFactors.push(i);
              number = number / i;
          }
      }
  
      if (number > 2) {
          primeFactors.push(number);
      }
      return primeFactors[primeFactors.length-1];
  }
  //tested at https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-3-largest-prime-factor
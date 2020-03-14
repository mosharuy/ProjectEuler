/**Project Euler: Problem 4: Largest palindrome product
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two n-digit numbers.
 * */

function largestPalindromeProduct(n) {

  const isPalindrome = num => {
    let n = num;
    let rev =0,dig = 0;
    while (num > 0)
    {
        dig = num % 10;
        rev = rev * 10 + dig;
        num = Math.floor(num / 10);
    }
    return n == rev;
}
  let numMax = Math.pow(10,n) - 1;
  let numMin = Math.pow(10,n-1);
  
  let x=1, palindrom = 0;
    outerLoop:
    for (let i=numMax;i>numMin;i--){
        for (let j=numMax;j>numMin;j--){
            x = j * i;
            if(isPalindrome(x) && x > palindrom){
                palindrom = x;
            }  
        }
    }
  
    return palindrom;
  }

console.log(largestPalindromeProduct(3));

// tested at https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-4-largest-palindrome-product
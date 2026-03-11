//Jeshua Abraham Perez Diaz TDSM4A
//Create a function to check if a number is a palindrom
//example: 12321 is a palindrome, but 12345 is false

function isPalindrome(num) {
  let og = num;
  let reverse = 0;

  while (num > 0) {
    let last_digit = num % 10;
    reverse = reverse * 10 + last_digit;
    num = parseInt(num / 10);
  }

  return og === reverse;
}

const result = isPalindrome(1231);
console.log(result);

//Jeshua Abraham Perez Diaz TDSM4A
//Create a function to check if a number is a palindrom
//example: 12321 is a palindrome, but 12345 is false

function isPalindrome(palindrome) {
  let og = palindrome;
  let reverse = 0;

  while (palindrome > 0) {
    //get the last digit of the number
    let last_digit = palindrome % 10;
    //add the last digit to the reverse number
    reverse = reverse * 10 + last_digit;
    //remove the last digit from the original number
    palindrome = (palindrome / 10);
    //remove decimal
    palindrome = palindrome - (last_digit * 0.1);
  }
  //check if the original number is equal to the reverse number
  return og === reverse;
}

const result = isPalindrome(12321);
console.log(result);

function isPalindrome(word) {
  // Write your algorithm here
  let outPutResult=word.split("").reverse().join("")

  if (outPutResult === word){

    return true;
  }else{

    return false;
  }
 
}

isPalindrome("abba");
isPalindrome("racecar");

/* 
  Add your pseudocode here
  get the words into a varible
  split the words
  reverse the words 
  join the words

*/

/*
  Add written explanation of your solution here
  solution reverses the words and then checks to see if they match up
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;

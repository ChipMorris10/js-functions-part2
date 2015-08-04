// ----------- P R O B L E M 1 -----------

// Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
// Create a variable namesAndAges to hold the names and ages in an Ojbect
// uncomment line 7
// var namesAndAges = {Kelly: 19, Samantha: 32, Willy: 28};

// Create a function that does two things:
// 1. A variable oldestAge to hold the oldest person as the code iterates
// 2. A variable called name since I'm most interested in the name of person, not their age.

// given object: {'Chuck': 22, 'Brian': 46}
// iterate through each key,
// if its value is greatest yet, store it (and name)
// after all keys have been evaluated, return the stored name

// uncomment lines 18 - 30 for this to work
// function oldestPerson(obj) {
//   var oldestAge = 0;
//   var name = "";
//   for(key in obj) {
//     if(obj[key] > oldestAge) {
//       oldestAge = obj[key];
//       name = key;
//     }
//   }
//   return name;
// }; //  End of code

// console.log(oldestPerson(namesAndAges));



// ----------- P R O B L E M 2 -----------
// Define a function called `longestWord` that takes a string and returns the longest word in the string.

// create a variable called longestWord
// takes a string
// retuns the longest word in the string

// uncomment lines 42 & 44 for this to work
// var words = "this is the longest word in this sentence";

// function getLongestWord(str) {
// create vars for longestWord and wordSize
// break the string into an array?
// i.e. ["this", "is", "the", etc.]
// iterate over the array of words,
// put the word in variable
// compare variable to next word in sentence
// if next word is longer, put that in, otherwise move on
// continue through sentence
// console.log longest word
// ['word', 'another_word']

// uncomment lines 57 - 66 for this to work
// var longestWord = "";
// var stringArr = str.split(" ");

// stringArr.forEach(function(word) {
//   if (word.length > longestWord.length) {
//   longestWord = word;
//   }
// });

// console.log("The longest word in the the sentence is: " +longestWord);
// compare length of var word to var longestWord
// if word.length > longestWord.length set longestWord == word
// return longestWord

// uncomment lines 72 & 73 for this to work
// }
// getLongestWord(words);

// ----------- P R O B L E M 3 -----------

// Refactor the `longestWord` function so that it ignores punctuation.


// ----------- P R O B L E M 4 -----------
// Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.


function factorial(num) {
  var total = Math.random;
  for (var i = 1; i <= num; i++) {
    total *= i;
   // console.log("total", total);
  }
  return total;
}

console.log(factorial());






// function factorial(num) {
//   var total = 1;
//   for (var i = 1; i <= num; i++) {
//     total *= i;
//    // console.log("total", total);
//   }
//   return total;
// }

// console.log(factorial(4));





// Step 1: Create a variable with the original word
let originalWord = "racecar";

// Step 2: Convert the word to an array of characters
let characters = originalWord.split("");

// Step 3: Use a for loop to reverse the word
let reversedWord = "";
for (let i = characters.length - 1; i >= 0; i--) {
  reversedWord += characters[i];
}

// Step 4: Print the reversed word
console.log("Reversed Word:", reversedWord);

// Step 5 & 6: Compare and print result
if (originalWord === reversedWord) {
  console.log("It’s a palindrome!");
} else {
  console.log("Not a palindrome!");
}

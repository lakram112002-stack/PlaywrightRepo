// Step 1: Create a variable named score
let score = 63;

// Step 2: Use switch(true) to evaluate conditions
switch (true) {
  case (score >= 90):
    console.log("Grade: A");
    break;
  case (score >= 80 && score <= 89):
    console.log("Grade: B");
    break;
  case (score >= 70 && score <= 79):
    console.log("Grade: C");
    break;
  case (score >= 60 && score <= 69):
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}


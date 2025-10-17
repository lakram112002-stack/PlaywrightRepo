// Step 1: Declare browserName and assign a value
let browserName = "chrome";

// Step 2: Use if-else to decide which browser to launch
if (browserName === "chrome") {
  console.log("Launching Chrome browser...");
} else {
  console.log("Launching default browser...");
}

// Step 3: Declare testType and assign a value
let testType = "sanity";

// Step 4: Use switch to choose which set of tests to run
switch (testType) {
  case "smoke":
    console.log("Running Smoke Tests...");
    break;
  case "sanity":
    console.log("Running Sanity Tests...");
    break;
  case "regression":
    console.log("Running Regression Tests...");
    break;
  default:
    console.log("Running Default Smoke Tests...");
}
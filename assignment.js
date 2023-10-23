//Question 1.
// Declare a variable numberStr and assign it a string value
let numberStr = "42";

// Use explicit type conversion to convert numberStr to a number using the Number() function
let convertedNumber = Number(numberStr);

// Display the converted number in the console
console.log(convertedNumber);


//Question 2
// Declare a variable num and assign it a numerical value
let num = 2023;

// Use explicit type conversion to convert num to a string using the String() function
let convertedString = String(num);

// Display the converted string in the console
console.log(convertedString);

//Question 3
// Declare a variable truthyValue and assign it a truth value
let truthyValue = "Hello";

// Declare a variable falsyValue and assign it a fals value
let falsyValue = 0;

// Use explicit type conversion to convert truthyValue to a boolean using the Boolean() function
let convertedTruthyBoolean = Boolean(truthyValue);

// Use explicit type conversion to convert falsyValue to a boolean using the Boolean() function
let convertedFalsyBoolean = Boolean(falsyValue);

// Display the converted boolean values in the console
console.log("Converted Truthy Value:", convertedTruthyBoolean);  // Expected output: true
console.log("Converted Falsy Value:", convertedFalsyBoolean);    // Expected output: false


//Extra Questions for Practice
// Question 1
// Declare a variable currentDate and assign it the current date and time using the new Date() constructor
let currentDate = new Date();

// Use the getTime() method to convert currentDate to a number representing the number of milliseconds since January 1, 1970 
let millisecondsSinceEpoch = currentDate.getTime();

// Display the converted number in the console
console.log("Milliseconds since January 1, 1970:", millisecondsSinceEpoch);

// Question 2
// Declare a variable eventDate and assign it a specific future date and time using the new Date() constructor
// For demonstration purposes, I'll set the eventDate to December 31, 2023, 23:59:59
let eventDate = new Date(2023, 11, 31, 23, 59, 59);  // Since Months are 0-indexed in JavaScript, so 11 represents December

// Use the toLocaleString() method to convert eventDate to a localized date and time string
let localizedDateString = eventDate.toLocaleString();

// Display the converted string in the console
console.log("Localized Date and Time String:", localizedDateString);





// Import the `validator` module
const validator = require("validator");

// Sample email to validate
const email = "robvatcher@hotmailcom";

// Check if the email is valid
console.log(`Is the email valid? ${validator.isEmail(email)}`);

// Sample URL to validate
const url = "https://www.google.com";

// Check if the URL is valid
console.log(`Is the URL valid? ${validator.isURL(url)}`);

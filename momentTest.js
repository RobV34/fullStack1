// Import moment
const moment = require("moment");

// Display the current date and time
console.log("Current Date and Time:", moment().toString());

// Format the current date in a specific format
console.log("Formatted Date:", moment().format("YYYY-MM-DD"));

// Calculate and display a date 10 days in the future
console.log("Date in 10 Days:", moment().add(10, "days").format("YYYY-MM-DD"));

// Calculate and display a date 7 hours in the past
console.log("Time 7 Hours Ago:", moment().subtract(7, "hours").format());

// Display the start of the current day
console.log(
  "Start of Today:",
  moment().startOf("day").format("YYYY-MM-DD HH:mm:ss")
);

// Parse a date string
const birthday = "1990-12-31";
console.log("Parsed Date:", moment(birthday).format("dddd, MMMM Do YYYY"));

// Display the difference between two dates
const graduationDate = "2024-05-20";
console.log(
  "Days Until Graduation:",
  moment(graduationDate).diff(moment(), "days"),
  "days"
);

// Check if a date is before another date
const isBefore = moment("2010-10-20").isBefore("2010-12-31");
console.log("Is October before December?", isBefore ? "Yes" : "No");

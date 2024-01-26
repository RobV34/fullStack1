// Import the 'fs' module
const fs = require("fs");

// Use 'fs.writeFile' to create a new file or overwrite an existing file called 'newfile.txt'
fs.writeFile("newfile.txt", "Hello, this is new content!", (err) => {
  // If an error occurs during the file writing process, log it to the console
  if (err) {
    return console.error("Error writing to file:", err);
  }
  // If no error, log to the console that the file was written successfully
  console.log("File created and content written!");
});

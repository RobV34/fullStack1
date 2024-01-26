// Import the 'fs' module, which provides APIs to interact with the file system
const fs = require('fs');

// Use 'fs.readFile' to read the contents of a file called 'example.txt'
fs.readFile('example.txt', 'utf8', (err, data) => {
  // If an error occurs during the read operation, log it to the console
  if (err) {
    return console.error('Error reading file:', err);
  }
  // If no error, log the contents of the file to the console
  console.log('File contents:', data);
});

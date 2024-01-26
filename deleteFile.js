// Import the 'fs' module
const fs = require('fs');

// Use 'fs.unlink' to delete a file named 'deleteme.txt'
fs.unlink('newfile.txt', (err) => {
  // If an error occurs during the file deletion, log it to the console
  if (err) {
    return console.error('Error deleting file:', err);
  }
  // If no error, log to the console that the file was deleted successfully
  console.log('File deleted!');
});



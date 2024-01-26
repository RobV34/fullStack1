//System Details

// Import the os module, which is a core module of Node.js
const os = require("os");

// Retrieve and log the operating system platform
console.log("Operating System Platform:", os.platform());

// Retrieve and log the total memory of the system in bytes
console.log("Total System Memory:", os.totalmem(), "bytes");

// Retrieve and log the free memory of the system in bytes
console.log("Free System Memory:", os.freemem(), "bytes");

// Retrieve and log the network interfaces and their details
console.log("Network Interfaces:", os.networkInterfaces());

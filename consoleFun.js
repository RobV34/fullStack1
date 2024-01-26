//Console Fun

// console.log() outputs a message to the console
console.log("This is a regular message from console.log");

// console.error() outputs an error message to the console
console.error("This is an error message from console.error");

// console.time() starts a timer you can use to track how long an operation takes
console.time("100-elements");
for (let i = 0; i < 100; i++) {
  // Simulate a loop that does some work
}
// console.timeEnd() stops the timer and outputs the duration
console.timeEnd("100-elements");

// console.assert() writes an error message to the console if the assertion is false
console.assert(
  1 === 1,
  "This will not be printed because the assertion is true"
);
console.assert(1 === 2, "This will be printed because the assertion is false");

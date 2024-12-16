function myFunc(a, b) {
  if (a === undefined || b === undefined) {
    console.error('Error: Both arguments are required.');
    return; //or return a default value like 0
  }
  console.log(a + b);
}

myFunc(1, 2); // Output: 3
myFunc(1);    // Output: Error: Both arguments are required.
myFunc();      // Output: Error: Both arguments are required.
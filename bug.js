function myFunc(a, b) {
  if (a === undefined || b === undefined) {
    return;
  }
  console.log(a + b);
}

myFunc(1, 2); // Output: 3
myFunc(1);    // Output: undefined
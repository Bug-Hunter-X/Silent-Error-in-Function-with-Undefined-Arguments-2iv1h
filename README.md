# Silent Error in JavaScript Function

This repository demonstrates a common, yet subtle, error in JavaScript functions where undefined arguments lead to unexpected behavior without explicit error handling.  The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version. 

## The Problem

The original function `myFunc` doesn't explicitly handle cases where arguments are missing. When called with fewer than two arguments it silently returns `undefined` rather than signaling an error or using default values. This can lead to difficult-to-debug issues in larger applications.

## The Solution

The solution adds robust error handling using an explicit `if` condition to check for undefined arguments. This improved version either provides a helpful error message or implements default values, preventing unexpected behavior and making the code more resilient.
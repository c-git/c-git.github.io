+++
title='Arrays'
date = 2022-08-19
updated = 2023-11-08
extra = { series = "javascript" }
taxonomies = { tags = ["javascript"] }
+++

Source: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>

# includes

Source: <https://www.w3schools.com/jsref/jsref_includes_array.asp>

Checks if the input is contained in the array

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // Returns true
```

# some

The `some()` method tests whether at least one element in the array passes the test implemented by the provided
function.
It returns true if, in the array, it finds an element for which the provided function returns true;
otherwise it returns false.
It doesn't modify the array.

```javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

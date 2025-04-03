                                        // ------------ In place methods (Modify original) --------------------


//=================  push() → Add elements to the end   ===============================
// let arr = [1,3,4,5]
// arr.push(33)
// console.log(arr)

//================= pop() → Remove the last element   =================================

// let arr = [13,4,5,56]
// arr.pop()
// console.log(arr)


//================= shift() → Remove the first element  =================================

// let arr = [3,4,5,6,7]
// arr.shift()
// console.log(arr)


//================= unshift() → Add elements to the beginning  =================================

// let arr = [3,5,6,7]
// arr.unshift(44)
// console.log(arr)


//================= splice() → Add, remove, or replace elements  =================================

// let arr = [3,4,6,7]
// arr.splice(1,2,44,55,66)
// console.log(arr)

//================= sort() → Sort elements (modifies in-place) =================================

// let arr = [3,4,5,6,22,2,77,7]
// arr.sort((a,b)=>a-b)
// console.log(arr)

//=========================  reverse() → Reverse the array  =================================

// let arr = [3,4,5,6,77,2,1]
// arr.reverse()
// console.log(arr)

//================= fill() → Fill all or part of the array with a value  =================================
// array.fill(value, start, end)

// let arr = [2,45,6,77,7]
// arr.fill(0,1,4)
// console.log(arr) // Output: [2, 0, 0, 0, 7]


//================= copyWithin() → Copy elements within the array  =================================
// array.copyWithin(target, start, end)
// The reason you don't see [4,5,66,4,5,66] is that the copyWithin() method does not change the array's size

// let arr = [2,4,5,66]
// arr.copyWithin(0,1,3)
// console.log(arr)



                                        // ------------  Non-Mutating (Returns New Array)--------------------


//================= concat() → Join two or more arrays  =================================

// let arr = [1,3,4,5]
// let arr2 = [3,4,55]
// let arr3 = [33,555,666]
// let newarr = arr.concat(arr2,arr3)
// console.log(newarr)


//================= slice() → Extract a section of the array =================================
// array.slice(start, end)
// let arr= [1,3,4,5]
// let res = arr.slice(1,3)// Extracts from index 1 to 2 (3 excluded)
// console.log(res)



//================= map() → Transform each element and return a new array  =================================

// The map() method in JavaScript is used to create a new array by applying a function to each element of the original array. It does not change the original array.
// array.map(function(currentValue, index, array) {
//     // return new value for currentValue
//   }, thisArg)
  
// function → The callback function that applies to each element.

// currentValue → The current element being processed.

// index (optional) → The index of the current element.

// array (optional) → The original array being processed.

// thisArg (optional) → Value to use as this when executing the callback.

// Returns a New Array → map() always returns a new array with transformed values.

// Original Array is Unchanged → It does not modify the original array.

// Requires a Return → The callback function must return a value; otherwise, it will return undefined.

// Chainable → It can be chained with other array methods like .filter() or .reduce(

// ----
// let arr = [2,4,5,66,7]
// let res = arr.map((value,index)=>value*2)
// console.log(res)



//================= filter() → Return elements that satisfy a condition  =================================

// The filter() method in JavaScript creates a new array containing all the elements that pass a specific test (condition) provided by a callback function. It does not modify the original array.

// array.filter(function(currentValue, index, array) {
//     // Return true to keep the element, false to exclude it
//   }, thisArg)

// function → The callback function that applies the condition.

// currentValue → The current element being processed.

// index (optional) → The index of the current element.

// array (optional) → The original array being processed.

// thisArg (optional) → Value to use as this when executing the callback.


// Creates a New Array → It returns a new array with elements that satisfy the condition.

// Does Not Change Original Array → The original array remains unchanged.

// Callback Must Return Boolean → The callback should return true to keep the element, or false to filter it out.

// Useful for Conditional Filtering → Ideal for filtering based on properties, values, or conditions.

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

  

//================= reduce() → Reduce the array to a single value  =================================

// The reduce() method in JavaScript is used to reduce an array to a single value (e.g., sum, product, or concatenation) by applying a callback function to each element
// array.reduce(function(accumulator, currentValue, index, array) {
//     // Perform operations and return the updated accumulator
//   }, initialValue)

// function → The callback function that performs the reduction.

// accumulator → The accumulated result (initially set to initialValue).

// currentValue → The current element being processed.

// index (optional) → The index of the current element.

// array (optional) → The original array.

// initialValue (optional) → The initial value for the accumulator. If omitted, the first element is used as the initial value.

// Returns a Single Value → reduce() returns a single accumulated result.

// Initial Value is Optional → If not provided, the first element is used as the initial value.

// Does Not Modify the Original Array → The original array remains unchanged.

// Useful for Aggregation → Ideal for summing numbers, finding the maximum value, or flattening arrays.


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15


//================= reduceRight() → Same as reduce(), but from right to left  =================================
// The reduceRight() method works just like reduce() but processes the array from right to left instead of left to right.
// array.reduceRight(function(accumulator, currentValue, index, array) {
//     // Perform operations and return the updated accumulator
//   }, initialValue)
  
// function → The callback function applied to each element.

// accumulator → The accumulated result.

// currentValue → The current element being processed.

// index (optional) → The index of the current element.

// array (optional) → The original array.

// initialValue (optional) → The initial value for the accumulator. If not provided, the last element is used as the initial value.


// Works Backwards → Starts from the last element and moves to the first.

// Returns a Single Value → Produces a reduced result like reduce().

// Original Array is Unchanged → It doesn't modify the original array.

// Best for Reversing Logic → Useful when the order of operations matters.

// const words = ['JavaScript', 'is', 'awesome'];
// const sentence = words.reduceRight((acc, word) => acc + ' ' + word);
// console.log(sentence); // Output: "awesome is JavaScript"


//================= flat() → Flatten nested arrays  =================================
// array.flat(depth)
// array → The original array with nested elements.
// depth (optional) → The number of levels to flatten. The default is 1.
// Returns a New Array → It does not change the original array.
// Default Depth is 1 → By default, it flattens one level deep.
// Infinite Flattening → Use Infinity to flatten all levels.
// Removes Empty Slots → Any empty slots (undefined) in the array are removed.

// const arr = [1, [2, 3], [4, 5, [6, 7]]];
// const flatArr = arr.flat();
// console.log(flatArr); // Output: [1, 2, 3, 4, 5, [6, 7]]( Infinity)


//================= flatMap() → Map and flatten in one step =================================
// The flatMap() method in JavaScript first applies a callback function to each element of an array (like map()), then flattens the result by one level using flat(1).
// function → The callback function applied to each element.

// currentValue → The current element being processed.

// index (optional) → The index of the current element.

// array (optional) → The original array.

// thisArg (optional) → Value to use as this when executing the callback.
// Combines map() and flat() → First transforms the elements, then flattens one level.

// Shallow Flattening → It flattens only one level deep.

// Returns a New Array → The original array remains unchanged.

// More Efficient → Faster than using map().flat().

// const arr = [1, 2, 3];
// const result = arr.flatMap(num => [num, num * 2]);
// console.log(result); // Output: [1, 2, 2, 4, 3, 6]


//================= toSorted() → Sort without modifying the original array (ES2023)  =================================

// The toSorted() method in JavaScript is a new addition introduced in ES2023. It works like the traditional sort() method but does not modify the original array. Instead, it returns a new, sorted array

// array.toSorted(compareFunction)
// array → The original array to be sorted.
// compareFunction (optional) → A function that defines the sorting logic.
// function(a, b) => a - b for ascending order.
// function(a, b) => b - a for descending order.

// Non-Destructive → Unlike sort(), toSorted() does not change the original array.
// Returns a New Array → The original array remains untouched.
// Custom Sorting → You can apply custom sorting using a comparator function.
// Supports All Data Types → Strings, numbers, and objects can be sorted.


// const numbers = [5, 2, 9, 1, 7];
// const sortedNumbers = numbers.toSorted((a, b) => a - b);

// console.log(sortedNumbers); // Output: [1, 2, 5, 7, 9]
// console.log(numbers);       // Output: [5, 2, 9, 1, 7] (Original remains unchanged)

//================= toReversed() → Reverse without modifying the original array (ES2023)  =================================

// The toReversed() method in JavaScript was introduced in ES2023. It returns a new array with the elements in reverse order, without changing the original array.
// array.toReversed()
// array → The original array whose elements will be reversed.

// Non-Destructive → Unlike reverse(), toReversed() does not modify the original array.
// Returns a New Array → A reversed copy of the original array.
// Works on All Data Types → Supports numbers, strings, objects, etc.
// No Callback Function → It simply reverses the array without needing a comparison function.

// const arr = [1, 2, 3, 4, 5];
// const reversedArr = arr.toReversed();

// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
// console.log(arr);          // Output: [1, 2, 3, 4, 5] (Original remains unchanged)

//================= toSpliced() → Non-Mutating Version of splice() (ES2023)  =================================
// The toSpliced() method, introduced in ES2023, is a non-destructive alternative to splice(). It returns a new array with elements added, removed, or replaced, without modifying the original array.
// array.toSpliced(start, deleteCount, item1, item2, ...)

// array → The original array.
// start → The index at which to start changing the array.
// deleteCount → Number of elements to remove.
// item1, item2, ... (optional) → Elements to add at the specified index.
// Non-Destructive → Unlike splice(), toSpliced() does not modify the original array.
// Returns a New Array → The result is a modified copy of the array.
// Supports Deletion, Insertion, and Replacement →
// Deletion: Remove elements.
// Insertion: Add new elements.
// Replacement: Replace existing elements with new ones.
// Negative Indexing → Supports negative start values to count from the end.

// const arr = [1, 2, 3, 4, 5];
// const result = arr.toSpliced(1, 2);

// console.log(result); // Output: [1, 4, 5]
// console.log(arr);    // Output: [1, 2, 3, 4, 5] (Original remains unchanged)


                                        // ------------ Searching & Checking --------------------


//================= indexOf() → Find the Index of a Value  =================================

// The indexOf() method in JavaScript returns the first index at which a specified element is found in an array. If the element is not found, it returns -1.
// array.indexOf(searchElement, fromIndex)
// array → The array to search within.

// searchElement → The value to search for.

// fromIndex (optional) → The index to start the search from. Defaults to 0.
// Returns the First Match → Only the first occurrence of the element is returned.

// Case-Sensitive → For strings, it is case-sensitive.

// Strict Equality (===) → Compares values using strict equality.

// Returns -1 if Not Found → If the value is absent, it returns -1.

// Supports Negative Indexing → fromIndex can be negative, starting from the end.
// const numbers = [10, 20, 30, 40, 20];
// console.log(numbers.indexOf(20)); // Output: 1

//================= lastIndexOf() → Find the last index of a value  =================================
// The lastIndexOf() method in JavaScript returns the last index at which a specified element is found in an array. If the element is not found, it returns -1.
// array.lastIndexOf(searchElement, fromIndex)
// array → The array to search within.

// searchElement → The value to search for.

// fromIndex (optional) → The index to start the search backward from. Defaults to the last index of the array.
// Returns the Last Match → Unlike indexOf(), it searches from right to left.

// Case-Sensitive → For strings, it is case-sensitive.

// Strict Equality (===) → Compares values using strict equality.

// Returns -1 if Not Found → If the value is absent, it returns -1.

// Supports Negative Indexing → fromIndex can be negative to count from the end.

// const numbers = [10, 20, 30, 40, 20];
// console.log(numbers.lastIndexOf(20)); // Output: 4

//================= includes() → Check if an element exists  =================================

// The includes() method in JavaScript checks whether an array contains a specified element. It returns true if the element is found, otherwise it returns false.

// array.includes(searchElement, fromIndex)
// array → The array to search within.

// searchElement → The value to check for.

// fromIndex (optional) → The index to start the search from. Defaults to 0.
// Returns Boolean → Returns true or false based on the result.

// Case-Sensitive → For strings, it is case-sensitive.

// Strict Equality (===) → Compares values using strict equality.

// Works with All Data Types → Numbers, strings, objects, etc.

// Supports Negative Indexing → fromIndex can be negative to start from the end.
// const numbers = [10, 20, 30, 40];
// console.log(numbers.includes(20)); // Output: true
// console.log(numbers.includes(50)); // Output: false

//================= find() → Return the first matching element  =================================
// The find() method in JavaScript returns the first element in an array that satisfies a provided condition (specified by a callback function). If no elements satisfy the condition, it returns undefined.
// array.find(callback(element, index, array), thisArg)
// array → The array to search within.

// callback → A function that tests each element.

// element → The current element being processed.

// index (optional) → The index of the current element.

// array (optional) → The array being traversed.

// thisArg (optional) → Value to use as this when executing the callback.
// Returns the First Match → Stops searching once a match is found.

// Returns undefined if Not Found → If no element matches the condition.

// Non-Mutating → Does not change the original array.

// Best for Single Match Searches → Use when you only need the first matching element.


// const users = [
//     { id: 1, name: 'Abin' },
//     { id: 2, name: 'John' },
//     { id: 3, name: 'Doe' }
//   ];
  
//   const result = users.find(user => user.name === 'John');
//   console.log(result); // Output: { id: 2, name: 'John' }
  
// const numbers = [5, 12, 8, 130, 44];
// const result = numbers.find(num => num > 10);
// console.log(result); // Output: 12

//================= findIndex() → Return the index of the first matching element  =================================
// The findIndex() method in JavaScript returns the index of the first element in an array that satisfies a provided condition (specified by a callback function). If no elements satisfy the condition, it returns -1.
// array.findIndex(callback(element, index, array), thisArg)


//================= unshift() → Add elements to the beginning  =================================

//================= unshift() → Add elements to the beginning  =================================
//================= unshift() → Add elements to the beginning  =================================
//================= unshift() → Add elements to the beginning  =================================
//================= unshift() → Add elements to the beginning  =================================

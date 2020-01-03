/**
 * Exercises: String Part
 */

// Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut(slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3, 4));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(3, challenge.length -3));

// Use substr to slice out the phase because because because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
//  01234567890123456789012345678901234567890123456789012345678901234567890
// Instead of "magic number" we can use indexOf and lastIndexOf in this particular case!
let stringToSlice = 'You cannot end a sentence with because because because is a conjunction';
let tagString = 'because';
// console.log(stringToSlice.substring(stringToSlice.indexOf(tagString), 
//     stringToSlice.lastIndexOf(tagString) + tagString.length));
console.log(stringToSlice.substring(0, stringToSlice.indexOf(tagString)) + stringToSlice.substring(stringToSlice.lastIndexOf(tagString)));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into array using split() method
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// splitting by ', ' remove trailing space and create the array ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('30 Days Of JavaScript'.replace('JavaScript', 'Python'));

// What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.
console.log(challenge.charAt(15)); // S

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// J is unique in '30 Days Of JavaScript' => we can use indexOf
console.log(challenge.charCodeAt(challenge.indexOf('J'))); // 74

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let charToSearch = 'a';
console.log(challenge.indexOf(charToSearch)); // 4

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf(charToSearch)); // 14

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
// see above variables definitions
console.log(stringToSlice.indexOf(tagString)); // 31

// Use lastIndexOf to find the position of the --first-- last occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
console.log(stringToSlice.lastIndexOf(tagString)); // 47

// Use search to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
console.log(stringToSlice.search('because')); // 31

// Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log('\'' + ' 30 Days Of JavaScript '.trim() + '\'');









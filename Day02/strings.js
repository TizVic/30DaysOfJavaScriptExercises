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
let stringToSlice = 'You cannot end a sentence with because because because is a conjunction';
console.log(stringToSlice.substring(stringToSlice.indexOf('because'), 
    stringToSlice.lastIndexOf('because') + 'because'.length));





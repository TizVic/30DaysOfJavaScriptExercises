/**
 * Day 05 Exercises
 */
// 1. Declare an empty array;
let myEmptyArray = [];
console.log('Empty array:', myEmptyArray);

// 2. Declare an array with more than 5 number of elements
let moreThanFiveElementArray = [0,1,2,3,4,5];

// 3. Find the length of your array
console.log(`This array has ${moreThanFiveElementArray.length} elements`, moreThanFiveElementArray);

// 4. Get the first item, the middle item and the last item of the array
let firstItem = moreThanFiveElementArray[0];
let lastItem = moreThanFiveElementArray[moreThanFiveElementArray.length - 1];
let middleItem = moreThanFiveElementArray[Math.floor(moreThanFiveElementArray.length / 2)];
console.log(`first element:${firstItem}, middle element:${middleItem}, last element:${lastItem}`);

// 5. Declare an array called mixedDataTypes,
//    put different data types in your array and 
//    find length of the array. 
//    You are should size be greater than 5
let mixedDataTypes = [0, true, 'c', {me: 'TizVic', isMe:true}, 9.81, Math.PI];
console.log(`My array is:${mixedDataTypes}\nand its length is ${mixedDataTypes.length}`);

// 6. Declare an array variable name itCompanies 
//    and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Print the array using console.log()
console.log('itCompanies array:', itCompanies);

// 8. Print the number of companies in the array
console.log('Number of companies in the array:', itCompanies.length);

// 9. Print the first company, middle and last company
moreThanFiveElementArray = itCompanies;
firstItem = moreThanFiveElementArray[0];
lastItem = moreThanFiveElementArray[moreThanFiveElementArray.length - 1];
middleItem = moreThanFiveElementArray[Math.floor(moreThanFiveElementArray.length / 2)];
console.log(`first element:${firstItem}, middle element:${middleItem}, last element:${lastItem}`);

// 10. Print out each company
console.log(itCompanies.join(',\n'));

// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies.join(',\n').toUpperCase());

// 12. Print the array like as a sentence: 
//     Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let itCompaniesSentence = itCompanies.slice(0, 5).join(', ') + 
    ` and ${itCompanies[itCompanies.length - 1]} are big IT companies.`;
console.log(itCompaniesSentence);

// 13. Check if a certain company exists in the itCompanies array. 
//     If it exist return the company else return a company is not found
// let companyToCheck = 'Microsoft';
let companyToCheck = 'HP';
if (itCompaniesSentence.includes(companyToCheck)) {
    console.log(companyToCheck);
} else {
    console.log(`${companyToCheck} is not found.`);
}

// 14. Filter out companies which have more than one 'o' without the filter method
//console.log(itCompanies.join(',\n').match(/o+/gi)); //(?=o)(?=o)
// TODO

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, itCompanies.length - 3));

// 19. Slice out the middle IT company or companies from the array
let arraySpliced = itCompanies.splice(Math.floor(itCompanies.length/2), 1)
console.log(itCompanies);

// 20. Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies = [];
console.log(itCompanies);

// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file
// Done in index.html

// 25. First remove all the functions and change the string to array 
//     and count the number of words in the array
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let charOnlyRegEx = /[^a-zA-Z\s]/g;
let words = text.replace(charOnlyRegEx, '').split(' ');
console.log(words);
console.log(words.length);


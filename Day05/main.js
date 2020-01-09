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

// 26. In the following shopping cart add, remove, edit items
// - add 'Meat' in the beginning of your shopping cart if if it has not be already added
// - add sugar at the end of you shopping cart if it has not been already added
// - Remove 'Honey' if you are allergic to honey
// - modify tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
function isItemPresent(_item) {
    shoppingCart.filter((item) => {
        return item === _item;
    }).length > 0; 
}

if (!isItemPresent('Meat')) shoppingCart.unshift('Meat');
console.log('Add meat at the beginning:', shoppingCart);
if (!isItemPresent('Sugar')) shoppingCart.push('Sugar');
console.log('add sugar at the end:', shoppingCart);
let isAllergicToHoney = true;
let noHoney;
if (isAllergicToHoney) {
    // noHoney = shoppingCart.slice(0, shoppingCart.indexOf('Honey')).concat(shoppingCart.slice(shoppingCart.indexOf('Honey')+1));
    // shoppingCart[shoppingCart.indexOf('Honey')] = null;
    console.log('Honey removed', shoppingCart.filter((item) => {
        return item !== 'Honey';
    })); 
}
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

// 27. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//     If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) console.log(countries[countries.indexOf('Ethiopia')].toUpperCase());

// 28. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//     If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Saas')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Saas');
    console.log(webTechs);
}

// 29. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// 30. The following is an array of 10 students ages:
//     - Sort the array and find the min and max age
//     - Find the min age and the max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method 1. 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(`min:${ages[0]}, max:${ages[ages.length - 1]}`);

let medianIndex = ages.length / 2;
if (medianIndex % 1 !== 0) {
    console.log(`median:${ages[medianIndex - 0.5]}`);
} else {
    console.log(`median (central elements):${(ages[medianIndex - 1] + ages[medianIndex])/2}`);
}
let sum = 0;
ages.forEach((element) => { sum += element });
let avg = sum / ages.length;
console.log('average:', avg);

console.log(`range: ${ages[ages.length - 1] - ages[0]}`);

console.log(`min - average:${Math.abs(ages[0] - avg)}, max - average:${ages[ages.length - 1] - avg}`);

// 31. Slice the first ten countries from the countries array
console.log(countries.slice(10));

// 32. Find the middle country(ies) in the countries array
medianIndex = countries.length / 2;
if (medianIndex % 1 !== 0) {
    console.log(`central country:${countries[medianIndex - 0.5]}`);
} else {
    console.log('central countries:',countries[medianIndex - 1], countries[medianIndex]);
}

// 33. Divide the countries array into two equal arrays if it is even. 
//     If countries array is not even , one more country for the first half.
let firstHalf, secondHalf;
if (medianIndex % 1 !== 0) {
    firstHalf = countries.slice(0, medianIndex + 0.5);
    secondHalf = countries.slice(medianIndex + 0.5);
    console.log(firstHalf, secondHalf);
} else {
    firstHalf = countries.slice(0, medianIndex);
    secondHalf = countries.slice(medianIndex);
    console.log(firstHalf, secondHalf);
}



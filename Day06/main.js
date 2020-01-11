/**
 * Day 06 Exercises
 */
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log('for:',i);
}

let i = 0;
while (i <=10) {
    console.log('while',i++);
}

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log('reverse for:',i);
}

i = 10;
while (i >= 0) {
    console.log('reverse while',i--);
}


// 3. Iterate 0 to n using for loop


// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
let hashes = '';
for (let i = 1; i <= 7; i++) {
    hashes += '#';
    console.log(hashes);
}

// 5. Use loop to print the following pattern:
//    0 x 0 = 0
//    1 x 1 = 1
//    2 x 2 = 4
//    3 x 3 = 9
//    4 x 4 = 16
//    5 x 5 = 25
//    6 x 6 = 36
//    7 x 7 = 49
//    8 x 8 = 64
//    9 x 9 = 81
//    10 x 10 = 100
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// 6. Using loop print the following pattern
//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000
console.log('i\ti^2\ti^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t${i**2}\t${i**3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i += 2) {
    console.log('even number:', i);
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 !== 0) console.log('odd number:', i);
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
let primes = [2];
for (i = 0; i <= 100; i++) {
    if (i > 2) {
        let isPrime = true;
        for (const prime of primes) {
            if (i % prime === 0) {
                isPrime = false;
                break;
            } 
        }
        if (isPrime) primes.push(i);
    }
}
console.log(primes);

// 10. Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.
//     The sum all numbers is 5050.
let sum = 0;
for (i = 0; i <= 100; i++) {
    sum += i;
}
console.log('sum of all number between 0 and 100:', sum);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//     The sum of all evens is 2550. And the sum of all odds is 2500.
let oddSum = 0, evenSum = 0;
for (i = 0; i <= 100; i++) {
    i % 2 === 0 ? evenSum += i : oddSum += i;
}
console.log(`The sum of all evens is ${evenSum}. And the sum of all odds is ${oddSum}`);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//     [2550, 2500]
let sums = [0, 0];
for (i = 0; i <= 100; i++) {
    i % 2 === 0 ? sums[0] += i : sums[1] += i;
}
console.log(sums);

// 13. Develop a small script which generate array of 5 random numbers
for (i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 100));
}

// 14. Develop a small script which generate array of 5 random numbers 
//     and the numbers must be unique
let randomNumbers = [];
while (randomNumbers.length <= 5) {
    let rnd = Math.floor(Math.random() * 100);
    if (!randomNumbers.includes(rnd)) randomNumbers.push(rnd);  
}
console.log(randomNumbers);

// 15. Develop a small script which generate a six characters 
//     random id: 5j2khz
const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
let id = '';
for ( i = 0; i < 6; i++) {
    let rndIndex = Math.floor(Math.random() * chars.length);
    id += chars[rndIndex];
}
console.log('random id:', id);

// 16. Develop a small script which generate any number of characters 
//     random id:
//          fe3jo1gl124g
//          xkqci4utda1lmbelpkm03rba
let numberOfIdChars = Math.floor(Math.random() * 100 + 1);
id = '';
for ( i = 0; i < numberOfIdChars; i++) {
    let rndIndex = Math.floor(Math.random() * chars.length);
    id += chars[rndIndex];
}
console.log('random id:', id);

// 17. Write a script which generates a random hexadecimal number.
//     '#ee33df'
const hexChars = '0123456789abcdef';
let hexId = '#';
for ( i = 0; i < 6; i++) {
    let rndIndex = Math.floor(Math.random() * hexChars.length);
    hexId += hexChars[rndIndex];
}
console.log('Hex id:', hexId);

// 18. Write a script which generates a random rgb color number.
// rgb(240,180,80)
console.log(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`);

// 19. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newArr = [];
for(let i = 0; i < countries.length; i++){
   newArr.push(countries[i].toUpperCase());
}
console.log(newArr)

// 20. Using the above countries array, create an array for countries length'.
//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
newArr = [];
for(let i = 0; i < countries.length; i++){
   newArr.push(countries[i].length);
}
console.log(newArr);

// 21. Use the countries array to create the following array of arrays:
//     [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//     ]
newArr = [];
for(let i = 0; i < countries.length; i++) {
    let subArr = [];
    let country = countries[i]
    subArr.push(country);
    subArr.push(country.substr(0, 3).toUpperCase()); 
    subArr.push(country.length);
    newArr.push(subArr);
}
console.log(JSON.stringify(newArr));

// 22. In above countries array, check if there is a country or countries containing the word 'land'.
//     If there are countries containing 'land', print it as array.
//     If there is no country containing the word 'land', print 'These are countries without land'.
//     ['Finland', 'Iceland']
newArr = [];
newArr = countries.filter(country => country.includes('land'));
if (newArr.length > 0) {
    console.log(newArr);
} else {
    console.log('These are countries without land');
}

// 23. In above countries array, check if there a country or countries end with a substring 'ia'. 
//     If there are countries end with, print it as array. 
//     If there is no country containing the word 'land', print 'These are countries ends without ia'.
//     ['Albania', 'Bolivia','Ethiopia']
newArr = [];
newArr = countries.filter(country => country.endsWith('ia'));
if (newArr.length > 0) {
    console.log(newArr);
} else {
    console.log('These are countries without ending with ia');
}

// 24. Using the above countries array, find the country containing the biggest number of characters.
//     Ethiopia
let maxChars = 0;
let maxCharsCountry = '';
countries.forEach((country) => {if (country.length > maxChars) {
    maxChars = country.length; 
    maxCharsCountry = country;
}});
console.log(maxCharsCountry, maxChars);

// 25. Using the above countries array, find the country containing only 5 characters.
//     ['Japan', 'Kenya']
console.log(countries.filter((country) => country.length === 5));

// 26. Find the longest word in the webTechs array
maxChars = 0;
let maxCharsTechs = '';
webTechs.forEach((tech) => {if (tech.length > maxChars) {
    maxChars = tech.length; 
    maxCharsTechs = tech;
}});
console.log(maxCharsTechs, maxChars);

// 27. Use the webTechs are to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
newArr = [];
for (i = 0; i < webTechs.length; i++) {
    let subArr = [];
    subArr.push(webTechs[i]);
    subArr.push(webTechs[i].length);
    newArr.push(subArr);
}
console.log(newArr);

// 28. An application created using MongoDB, Express, React and Node is called a MERN stack.
//     Create the acronym MERN by using the array mernStack
let mern = '';
mernStack.forEach((tech) => mern += tech[0]);
console.log(mern);

// 29. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// 30. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// 31. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
for (techs of fullStack) {  
    for (tech of techs) console.log(tech.toUpperCase());
}

// Copy countries array(Avoid mutation)

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

// Sort the webTechs array and mernStack array

// Extract all the countries contain the word 'land' from the countries array and print it as array

// Find the country containing the hightest number of characters in the countries array

// Extract all the countries contain the word 'land' from the countries array and print it as array

// Extract all the countries containing only four characters from the countries array and print it as array

// Extract all the countries containing two or more words from the countries array and print it as array

// Reverse the countries array and capitalize each country and stored it as an array

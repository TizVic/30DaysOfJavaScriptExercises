/**
 * Day 10 Exercises
 */
/**
 * Level 1
 */
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway']
// L1.01 create an empty set
let emptySet = new Set();
console.log(emptySet);

// L1.02 Create a set containing 0 to 10 using loop
let tenSet = new Set();
for (let i = 0; i <= 10; i++) {
    tenSet.add(i);
}
console.log(tenSet);

// L1.03 Remove an element from a set
tenSet.delete(5);
console.log(tenSet);

// L1.04 Clear a set
tenSet.clear();
console.log(tenSet);

// L1.05 Create a set of 5 string elements from array
const fiveStringArray = ['a', 'b', 'c', 'd', 'e'];
let fiveStringSet = new Set(fiveStringArray);
console.log(fiveStringSet);

// Create a map of countries and number of characters of a country
let countryMap = new Map();
for (country of countries) {
    countryMap.set(country, country.length);
}
console.log(countryMap);

/**
 * Level 2
 */
const A = new Set(a);
const B = new Set(b);
console.log(A);
console.log(B);

// L2.01 Find a union b
const C = new Set([...a, ...b]);
console.log(C);

// L2.02 Find a intersection b
const intersectionAB = new Set(a.filter(num => B.has(num)));
console.log(intersectionAB);

// L2.03 Find a with b
const diffAB = new Set(a.filter(num => !B.has(num)));
console.log(diffAB);

/**
 * Level 3
 */
// L3.01 How many languages are there in the countries object file.
// TODO

// L3.02 *** Use the countries data to find the 10 most spoken languages:
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
// {'English':91},
// {'French':45},
// {'Arabic':25},
// {'Spanish':24},
// {'Russian':9},
// {'Portuguese':9},
// {'Dutch':8},
// {'German':7},
// {'Chinese':5},
// {'Swahili':4},
// {'Serbian':4}]
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [ {'English':91}, {'French':45}, {'Arabic':25} ]
// TODO



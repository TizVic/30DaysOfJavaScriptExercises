/**
 * Day 09 Exercises
 */
///
/// Exercises: Level 1
///
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]
// L1.01 Explain the difference between forEach, map, filter, and reduce.
// RTFM

// L1.02 Define a call function before you them in forEach, map, filter or reduce.
// ? English please

// L1.03 Use forEach to console.log each country in the countries array.
countries.forEach(c => console.log(c));

// L1.04 Use forEach to console.log each name in the names array.
names.forEach(n => console.log(n));

// L1.05 Use forEach to console.log each number in the numbers array.
numbers.forEach(n => console.log(n));

// L1.06 Use map to create a new array by changing each country to uppercase in the countries array.
let upperCountries = countries.map(c => c.toUpperCase());
console.log(upperCountries);

// L1.07 Use map to create an array of countries length from countries array.
let countriesLengths = countries.map(c => c.length);
console.log(countriesLengths);

// L1.08 Use map to create a new array by changing each number to square in the numbers array
const squareArray = numbers.map(n => n*n);
console.log(squareArray);

// L1.09 Use map to change to each name to uppercase in the names array
console.log(names.map(n => n.toUpperCase()));

// L1.10 Use map to map the products array to its corresponding prices.
// ???

// L1.11 Use filter to filter out countries containing land.
// Trivial

// L1.12 Use filter to filter out countries having six character.
console.log(countries.filter(c => c.length === 6));

// L1.13 Use filter to filter out countries containing six letters and more in the country array.
// Trivial

// L1.14 Use filter to filter out country start with 'E';
console.log(countries.filter(c => c.slice(0,1) !== 'E'));

// L1.15 Use filter to filter out only prices with values.
console.log(products.filter(p => typeof p.price === 'number'));
console.log(products.filter(p => typeof p.price !== 'number'));

// L1.16 Declare a function called getStringLists which takes an array as a parameter and 
//       then returns an array only with string items.
const getStringLists = arr => arr.filter(e => typeof e === 'string');
console.log(getStringLists(['a', 'b', 3, 'd']));

// L1.17 Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((prevValue, actualValue) => prevValue += actualValue));

// L1.18 Use reduce to concatenate all the countries and to produce this sentence: 
//       Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(countries.reduce((prev, act) => prev  + ', ' + act), 'are north European countries');

// L1.19 Explain the difference between some and every
// RTFM

// L1.20 Use some to check if some names' length greater than seven in names array
console.log(names.some(n =>{ return (n.length > 7);}));

// Use every to check if all the countries contain the word land
// Explain the difference between find and findIndex.
// Use find to find the first country containing only six letters in the countries array
// Use findIndex to find the position of the first country containing only six letters in the countries array
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

/**
 * Day 07 Exercises
 */

// 01. Declare a function fullName and it print out your full name.
const fullName = (firstName, lastName) => console.log(firstName, lastName);
fullName('Tiziano', 'Vicentini');

// 02. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
fullName('Tiziano', 'Vicentini');

// 03. Declare a function addNumbers and it takes two two parameters and 
//     it returns sum.
function addNumbers(a, b) {
    return a + b;
}
console.log('2 + 3 =',addNumbers(3, 2));

// 04. An area of a rectangle is calculated as follows: area = length x width.
//     Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => length * width;
console.log('rectangle 3m x 2m area is:', areaOfRectangle(3, 2), 'm^2');

// 05. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
//     Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => 2 * (length + width);
console.log('rectangle 3m x 2m perimeter is:', perimeterOfRectangle(3, 2), 'm');

// 06. A volume of a rectangular prism is calculated as follows: volume = length x width x height.
//     Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log('rectangular prism 2m x 3m x 4m volume is:', volumeOfRectPrism(2, 3, 4), 'm^3');

// 07. Area of a circle is calculated as follows: area = π x r x r.
//     Write a function which calculates areaOfCircle
const areaOfCircle = r => Math.PI * r ** 2;
console.log('the area of a circle with radius 1m:', areaOfCircle(1), 'm^2');


// 08. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = r => 2 * Math.PI * r;
console.log('the circumference of a circle with radius 1m:', circumOfCircle(1), 'm');


// 09. Density of a substance is calculated as follows:density= mass/volume.
//     Write a function which calculates density.
const density = (mass, volume) => mass / volume;
console.log('density for 2kg mass and 1 cm^3 volume', density(2, 0.000001), 'Kg/m^3');

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// 12. Temperature in oC can be converted to oF using this formula:
//     oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = (oC) => oC * 9 / 5 + 32;
let tempC = 20;
console.log(tempC, 'Celsius are:', convertCelciusToFahrenheit(tempC), 'Fahrenheit');

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//     Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     The same groups apply to both men and women.
//     Underweight: BMI is less than 18.5
//     Normal weight: BMI is 18.5 to 24.9
//     Overweight: BMI is 25 to 29.9
//     Obese: BMI is 30 or more
const bmi = (weight, height) => weight / height ** 2;
let BMI = bmi(56, 1.76);
switch (true) {
    case BMI < 18.5:
        console.log('you are', 'underweight');
        break;
    case BMI < 24.9:
        console.log('you are', 'normal weight');
        break;
    case BMI < 29.9:
        console.log('you are', 'overweight');
        break;
    case BMI >= 30:
        console.log('you are', 'obese');
        break;
}

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = month => {
    let season;
    switch (month.toLowerCase()) {
        case 'september':
        case 'october': 
        case 'november':
            season = 'Autumn';
            break;
        case 'december': 
        case 'january': 
        case 'february':
            season = 'Winter';
            break;
        case 'march': 
        case 'april': 
        case 'may':
            season = 'Spring';
            break;
        case 'june': 
        case 'july':
        case 'august':
            season = 'Summer';
            break;
    } 
    return season;
}
let month = 'JuNe';
console.log(month, 'is in', checkSeason(month));

// L1.15. Math.max returns its largest argument.
//     Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (num1, num2, num3) => {
    let max = num1;
    if (num2 > max) max = num2;
    if (num3 > max) max = num3;
    return max;
}
console.log('findMax(-1000, -10, -3):', findMax(-1000, -10, -3));

// L2.01. Linear equation is calculated as follows: ax + by + c = 0.
//     Write a function which calculates value of a linear equation, 
//     solveLinEquation.
const solveLinEquation = (a, b, c, x) => {
    if (b !== 0) {
        return -1 * (a * x + c) / b;
    } else if (a !== 0) {
        return `x = ${-1 * c / a}`;
    } else {
        return 'It\'s not a linear equation!';
    }
}

console.log('a=1, b=2, c=3, x=0', solveLinEquation(1,2,3,0));

// L2.02 Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
//       Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadEquation = (a, b, c) => {
    if (a == 0 || a === undefined) return 'Not a quadratic equation!';
    let B = b / a;
    let C = c / a;
    let delta = (B / 2) ** 2 - C;
    let solutions = [0, 0];
    if (delta < 0) {
        return 'Quadratic equation with solution in complex plane';
    } else {
        solutions[0] = B /2 - Math.sqrt(delta);
        solutions[1] = B /2 + Math.sqrt(delta);
    }
    return solutions;
}

console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4)); 
console.log(solveQuadEquation(1, -1, -2)); 
console.log(solveQuadEquation(1, 7, 12)); 
console.log(solveQuadEquation(1, 0, -4)); 
console.log(solveQuadEquation(1, -1, 0));


// L2.03 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = arr => {
    if (!Array.isArray(arr)) return `Parameter ${arr} must be an array!`;
    for (const item of arr) {
        console.log(item);
    }
}

console.log([0,1,2,3,4]);

// L2.04 Write a function name showDateTime which 
//       shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
const showDateTime = () => {
    const today = new  Date();
    let MM = today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0'.concat(today.getMonth() + 1);
    let DD = today.getDate() > 9 ? today.getDate() : '0'.concat(today.getDate());
    let HH = today.getHours() > 9 ? today.getHours() : '0'.concat(today.getHours());
    let mm = today.getMinutes() > 9 ? today.getMinutes() : '0'.concat(today.getMinutes());
    let ss = today.getSeconds() > 9 ? today.getSeconds() : '0'.concat(today.getSeconds());
    console.log(`${DD}/${MM}/${today.getFullYear()} ${HH}:${mm}`);
}
showDateTime();

// L2.05 Declare a function name swapValues. This function swaps value of x to y.
//          swapValues(3, 4) // x => 4, y=>3
//          swapValues(4, 5) // x = 5, y = 4
// TizVic: this is possible only for variable define outside the scope of the function, 
//         otherwise it is impossible to change parameter values.    
// let x = 3, y = 4;
// // const swapValues = (x, y) => {
// //     let temp = y;
// //     y = x;
// //     x = temp;
// // }
// const swapValues = (x, y) => {
//     let temp = y;
//     y = x;
//     x = temp;
// }
// swapValues(4, 3);
// console.log(`x=${x}, y=${y}`);

// L2.06 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
//      console.log(reverseArray([1, 2, 3, 4, 5]))
//      //[5, 4, 3, 2, 1]
//      console.log(reverseArray(['A', 'B', 'C']))
//      //['C', 'B', 'A']
const reverseArray = arr => {
    if (!Array.isArray(arr)) return `Parameter ${arr} must be an array!`;
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['A', 'B', 'C']));

// L2.07 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// Trivial

// L2.08 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// Trivial

// l2.09 Declare a function name removeItem. It takes an index parameter and 
//       it returns an array after removing an item
let arrayFull = [1,2,3,4,5,6];
const removeItem = index => {
    arrayFull.splice(index, 1);
    return arrayFull;
}
console.log(removeItem(3));


// L2.10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// Trivial

// L2.11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// Trivial

// L2.12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// Trivial

// L2.13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Trivial

// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Trivial

// Writ a function which generates a randomUserIp.
// Trivial

// Write a function which generates a randomMacAddress
// Trivial

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Trivial

// L2.18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
//  console.log(userIdGenerator());
//  41XTDbE
const charsForIdGeneration = '0123456789ABCDEFGHILMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const userIdGenerator = () => {
    let id = '';
    for (let i = 0; i < 7; i++) {
        let rndIdx = Math.floor(Math.random() * charsForIdGeneration.length);
        id += charsForIdGeneration[rndIdx];
    }
    return id;
}
console.log(userIdGenerator());

// L3.01 Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
//  userIdGeneratedByUser()
//  'kcsy2
//  SMFYb
//  bWmeq
//  ZXOYh
//  2Rgxf
//  '
//  userIdGeneratedByUser()
//  '1GCSgPLMaBAVQZ26
//  YD7eFwNQKNs7qXaT
//  ycArC5yrRupyG00S
//  UbGxOFI7UXSWAyKN
//  dIV0SSUTgAdKwStr
//  '
const userIdGeneratorByLength = (n) => {
    let id = '';
    for (let i = 0; i < n; i++) {
        let rndIdx = Math.floor(Math.random() * charsForIdGeneration.length);
        id += charsForIdGeneration[rndIdx];
    }
    return id;
}

const userIdGeneratedByUser = () => {
    let numberOfChars = prompt('Number of chars for Id generated');
    let numberOfIds = prompt('Number of Ids to generate');
    for (let i = 0; i < numberOfIds; i++) {
        console.log(userIdGeneratorByLength(numberOfChars));
    }
}
userIdGeneratedByUser();

// L3.02 Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)
// Trivial

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
// Trivial

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
// Trivial

// L3.05 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = hexColor => {
    let red = parseInt(hexColor.substring(1,3), 16);
    let green = parseInt(hexColor.substring(3,5), 16);
    let blue = parseInt(hexColor.substring(5), 16);
    return `rgb(${red}, ${green}, ${blue})`;
}
console.log(convertHexaToRgb('#a3e12f'));
console.log(convertHexaToRgb('#eb3d2b'));

// L3.06 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
const convertRgbToHexa = rgbColor => {
    let arrayColor = rgbColor.match(/\d+/g);
    let hexColor = '#';
    for (let i = 0; i < 3; i++) {
        hexColor += Number(arrayColor[i]).toString(16);
    }
    return hexColor;
}
console.log(convertRgbToHexa('rgb(163, 225, 47'));
console.log(convertRgbToHexa('rgb(235, 61, 43'));

// L3.07 Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = (hexOrRgb, numberOfColors) => {
    let arrayOfColors = [];
    if (hexOrRgb === 'rgb') {
        for (let i = 0; i < numberOfColors; i++) {
            arrayOfColors.push('rgb(' +
                Math.floor(Math.random() * 256) + ', ' +
                Math.floor(Math.random() * 256) + ', ' +
                Math.floor(Math.random() * 256) + ')'
            );
        }
    } else {
        for (let i = 0; i < numberOfColors; i++) {
            arrayOfColors.push('#' +
                Math.floor(Math.random() * 256).toString(16) +
                Math.floor(Math.random() * 256).toString(16) +
                Math.floor(Math.random() * 256).toString(16) 
            );
        }
    }
    return arrayOfColors;
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

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

// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Writ a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE
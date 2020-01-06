// Configuration for exercises using prompt
// set exN true to test the Nth exercice with prompt 
let ex1 = false;
let ex2 = false;
let ex6 = false;
let ex7 = false;
let ex8 = true;

// 1. Get user input using prompt(“Enter your age:”). 
//    If user is 18 or older , give feedback:You are old enough to drive
//    but if not 18 give feedback to wait for the years he supposed to wait for.

if (ex1) {
    let userAge = parseInt(prompt('Enter yout age', 'Age in year'));
    if (userAge >= 18) {
        console.log('You are old enough to drive');
    } else {
        console.log('You are left with', 18 - userAge, 'years to drive');
    }    
}

// 2. Compare the values of myAge and yourAge using if … else. 
//    Based on the comparison log to console who is older (me or you). 
//    Use prompt(“Enter your age:”) to get the age as input.
if (ex2) {
    let yourAge = 25;
    let myAge = parseInt(prompt('Enter your age'));
    if (myAge > yourAge) {
        console.log(`I\'m ${myAge - yourAge} years older than you`);
    } else if (myAge < yourAge) {
        console.log(`You are ${yourAge - myAge} years older than me`);
    } else {
        console.log('We have the same age');
    }
}

// 3. If a is greater than b return a is greater than b 
//    else a is less than b. Do it both using if else and ternary operator.
let a = 3;
let b= 4;
// if else method
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (a === b) {
    console.log(`${a} and ${b} are equal`);
} else {
    console.log(`${b} is greater than ${a}`);
}
// ternary operator
console.log(a > b ? `${a} is greater than ${b}` : 
    a === b ? `${a} and ${b} are equal` : `${b} is greater than ${a}`);

// 4. Write a code which give grade students according to theirs scores:
//    80-100, A
//    70-89, B
//    60-69, C
//    50-59, D
//    0 -49, F
let score = 80;
let grade;
switch (true) {
    case score < 50:
        grade = 'F';
        break;
    case score < 60:
        grade = 'D';
        break;
    case score < 70: 
        grade = 'C';
        break;
    case score < 80:
        grade = 'B';
        break;
    default:
        grade = 'A'
}
console.log('Your grade is:', grade);

// 5. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
//    September, October or November, the season is Autumn.
//    December, January or February, the season is Winter.
//    March, April or May, the season is Spring
//    June, July or August, the season is Summer
let season;
let month = 'January';
switch (month) {
    case 'September':
    case 'October': 
    case 'November':
        season = 'Autumn';
        break;
    case 'December': 
    case 'January': 
    case 'February':
        season = 'Winter';
        break;
    case 'March': 
    case 'April': 
    case 'May':
        season = 'Spring';
        break;
    case 'June': 
    case 'July':
    case 'August':
        season = 'Summer';
        break;
} 
console.log(`${month} is in ${season}`);

// 6. Even numbers are divisible by 2 and the remainder is zero. 
//    How do you check if a number is even or not using JavaScript?
if (ex6) {
    let numberToCheck = parseInt(prompt('Enter a number'));
    let even = numberToCheck % 2 === 0 ? true : false;
    console.log(`${numberToCheck} is an ${even ? 'even' : 'odd'} number`);
}

// 7. Check if a day is weekend day or a working day. 
//    Your script will take day as an input.
if (ex7) {
    let myDay = prompt('What day is today?');
    let myDayLC = myDay.toLowerCase();
    if (myDayLC === 'saturday' || myDayLC === 'sunday') {
        console.log(`${myDay} is a weekend day.`);
    } else {
        console.log(`${myDay} is a work day.`);
    }
}

// 8. Write a program which tells the number days in a month.
if (ex8) {
    let month = prompt('Enter month');
    let myMonth = month.toLowerCase();
    let numberOfDays;
    switch (myMonth) {
        case 'september':
        case 'june': 
        case 'november':
        case 'april':
            numberOfDays = 30;
            break;
        case 'february':
            numberOfDays = 28;
            break;
        default:
            numberOfDays = 31;
    } 
    console.log(`${myMonth.charAt(0).toUpperCase() + myMonth.slice(1)} has ${numberOfDays} days`);
}



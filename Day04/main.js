let ex1 = false;
let ex2 = true;
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


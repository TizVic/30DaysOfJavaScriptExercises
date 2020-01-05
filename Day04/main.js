// 1. Get user input using prompt(“Enter your age:”). 
//    If user is 18 or older , give feedback:You are old enough to drive
//    but if not 18 give feedback to wait for the years he supposed to wait for.
let userAge = parseInt(prompt('Enter yout age', 'Age in year'));
if (userAge >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log('You are left with', 18 - userAge, 'years to drive');
}


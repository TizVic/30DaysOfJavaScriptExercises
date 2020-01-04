// 1. Exercises: Data types Part
//     Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it
let firstName = 'Tiz', 
    lastName = 'Vic', 
    country = 'Italy', 
    city = 'Rome', 
    age = 40, 
    isMarried = true, 
    year = 2020;

//     The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
console.log(`firstName typeof: ${typeof firstName}`);
console.log(`lastName typeof: ${typeof lastName}`);
console.log(`country typeof: ${typeof country}`);
console.log(`city typeof: ${typeof city}`);
console.log(`age typeof: ${typeof age}`);
console.log(`isMarried typeof: ${typeof isMarried}`);
console.log(`year typeof: ${typeof year}`);

// 2, 3, 4, 5, 6. Execises: console
// 7. Exercises: Date time Object

//     What is the year today?
//     What is the month today?
//     What is the date today?
//     What is the day today?
//     What is the hours now?
//     What is the minutes now?
//     Find out the numbers of seconds elapsed from January 1, 1970 to now.
//     Create a human readable time format
//         YYY-MM-DD HH:mm:ss
//         DD-MM-YYYY HH:mm:ss
//         DD/MM/YYY HH:mm:ss

const today = new  Date();
console.log(`year: ${today.getFullYear()}`);
console.log(`month: ${today.getMonth() + 1}`);
console.log(`day: ${today.getDay()}`);
console.log(`hours: ${new Date().getHours()}`);
console.log(`minutes: ${new Date().getMinutes()}`);
console.log(`numbers of seconds elapsed from January 1, 1970 to now: ${Date.now()}`);
let MM = today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0'.concat(today.getMonth() + 1);
let DD = today.getDate() > 9 ? today.getDate() : '0'.concat(today.getDate());
let HH = today.getHours() > 9 ? today.getHours() : '0'.concat(today.getHours());
let mm = today.getMinutes() > 9 ? today.getMinutes() : '0'.concat(today.getMinutes());
let ss = today.getSeconds() > 9 ? today.getSeconds() : '0'.concat(today.getSeconds());
console.log(`${today.getFullYear()}-${MM}-${DD} ${HH}:${mm}:${ss}`);
console.log(`${DD}-${MM}-${today.getFullYear()} ${HH}:${mm}:${ss}`);






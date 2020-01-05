/**
 * Exercises: String Part
 */

// Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut(slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3, 4));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(3, challenge.length -3));

// Use substr to slice out the phase because because because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
//  01234567890123456789012345678901234567890123456789012345678901234567890
// Instead of "magic number" we can use indexOf and lastIndexOf in this particular case!
let stringToSlice = 'You cannot end a sentence with because because because is a conjunction';
let tagString = 'because';
// console.log(stringToSlice.substring(stringToSlice.indexOf(tagString), 
//     stringToSlice.lastIndexOf(tagString) + tagString.length));
console.log(stringToSlice.substring(0, stringToSlice.indexOf(tagString)) + stringToSlice.substring(stringToSlice.lastIndexOf(tagString)));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into array using split() method
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// splitting by ', ' remove trailing space and create the array ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '));

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('30 Days Of JavaScript'.replace('JavaScript', 'Python'));

// What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.
console.log(challenge.charAt(15)); // S

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// J is unique in '30 Days Of JavaScript' => we can use indexOf
console.log(challenge.charCodeAt(challenge.indexOf('J'))); // 74

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let charToSearch = 'a';
console.log(challenge.indexOf(charToSearch)); // 4

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf(charToSearch)); // 14

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
// see above variables definitions
console.log(stringToSlice.indexOf(tagString)); // 31

// Use lastIndexOf to find the position of the --first-- last occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
console.log(stringToSlice.lastIndexOf(tagString)); // 47

// Use search to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
console.log(stringToSlice.search('because')); // 31

// Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log('\'' + ' 30 Days Of JavaScript '.trim() + '\'');

// Use startsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.startsWith('30 '));

// Use endsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.endsWith('ript'));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/g)); // ["a", "a", "a"]

// Use match() to count the number all because's in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
// regex /because/g create an array ['because', 'because', 'because']
console.log(stringToSlice.match(/because/g).length); // 3

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of'.concat(' ', 'JavaScript'));

// Use repeat() method to print 30 Days Of JavaScript 2 times
let repeatN = 2
console.log(challenge.repeat(repeatN));

// Love is the best thing in this world. Some found their love and some are still looking for their love. 
// Count the number of word love in this sentence.
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveSentence.match(/love/gi).length);

// Calculate the total annual income of the person by extract the numbers from the following text. 
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// \d+ => numbers with repeat. g => globally. match => create an array 
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomeArray = text.match(/\d+/g);
let totalIncome = 12 * incomeArray[0] + 1 * incomeArray[1] + 12 * incomeArray[2];
console.log(totalIncome);

// Clean the following text and find the most frequent word(hint, use replace and regular express).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching';
let charOnlyRegEx = /[^a-zA-Z\s]/g; // /[@#$-/:-?{-~!"^_`\[\]]/g;
console.log(sentence.replace(charOnlyRegEx, '')); // word without symbols. TODO: counting

// Using console.log() print out the following statement.
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.
const quote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help to one another.';
console.log(quote);

// Using console.log() print out the following quote by Mother Teresa.
const mtQuote = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."';
console.log(mtQuote);

// Added exercises

// 33. Check if 'on' is found in both python and jargon
console.log('Check if \'on\' is found in both python and jargon:', 'python'.includes('on') && 'jargon'.includes('on'));

// 34. I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon. Check if jargon is in the sentence:', 'I hope this course is not full of jargon.'.includes('jargon'))

// 35. Generate a random number between 0 and 100 inclusive.
console.log('Generate a random number between 0 and 100 inclusive:', Math.floor(Math.random() * 101));

// 36. Generate a random number between 50 and 100 inclusive.
console.log('Generate a random number between 50 and 100 inclusive:', Math.floor(50 + Math.random() * 51));

// 37. Generate a random number between 0 and 255 inclusive.
console.log('Generate a random number between 0 and 255 inclusive:', Math.floor(Math.random() * 256));

// 38. Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript';
console.log('Access the \'JavaScript\' string characters using a random number:', 
    js[Math.floor(Math.random() * (js.length))]);

// 39. Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let longString =
'1 1 1 1 1\n\
2 1 2 4 8\n\
3 1 3 9 27\n\
4 1 4 16 64\n\
5 1 5 25 125';
console.log(longString);

// 40. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('Check if typeof \'10\' is exactly equal to 10. If not make it exactly equal.',
    '\ntypeof \'10\'', typeof '10', 
    '\ntypeof 10', typeof 10, 
    '\ntypeof parseInt(\'10\')', typeof parseInt('10'));

// 41. Check if parseInt('9.8') is equal to 10 if not make it exactly equal with 10.
console.log('Check if parseInt(\'9.8\') is equal to 10 if not make it exactly equal with 10.',
    '\nparseInt(\'9.8\')', parseInt('9.8'),
    '\nmake it exactly equal with 10:', parseInt('9.8') + 1);









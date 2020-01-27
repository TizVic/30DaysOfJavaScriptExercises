/**
 * Day 12 exercises
 */
/**
 * Level 1
 */

// L1.01 Calculate the total annual income of the person from the following text.
//       ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let incomeArray = text.match(/\d+/g);
let totalIncome = 12 * incomeArray[0] + 1 * incomeArray[1] + 12 * incomeArray[2];
console.log(totalIncome);

// L1.02 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative 
//       direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find 
//       the distance between the two furthest particles.
let physicsText = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';
let positions = physicsText.match(/[-]?\d+/gi).map(n => +n);
let maxDistance = arr => {
    let min = + Infinity;
    let max = - Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i];
        if (min > arr[i]) min = arr[i];
    }
    return Math.abs(max - min); 
}
console.log(maxDistance(positions));

// L1.03 Write a pattern which identify if a string is a valid JavaScript variable
// Trivial

/**
 * Level 2
 */
//  L2.01 Write a function called tenMostFrequentWords which get the ten most frequent word from a string
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.'
const tenMostFrequentWords = (text, topX = Infinity) => {
    let pattern = /\w+/g;
    let arrayOfWords = text.match(pattern);
    let vocabolary = new Map();
    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i];
        if (!vocabolary.has(word)) {
            vocabolary.set(word, 1);
        } else {
            let value = vocabolary.get(word) + 1;
            vocabolary.set(word, value);
        }
    }
    let sorted = [...vocabolary.entries()].sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, topX);
}
console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));

/**
 * Level 3
 */

// L3.01 Write a function which cleans text. Clean the following text. 
//       After cleaning, count three most frequent words in the string.
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'
const cleanText = text => {
    let pattern = /[^A-Za-z ]/g;
    let cleanedText = text.replace(pattern, '');
    return cleanedText;
}
console.log(cleanText(sentence));

// L3.02 Write a function which find the most frequent words. 
//       After cleaning, count three most frequent words in the string.
const mostFrequentWords = (text, topX = 3) => {
    let pattern = /\w+/g;
    let arrayOfWords = cleanText(text).match(pattern);
    let vocabolary = new Map();
    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i];
        if (!vocabolary.has(word)) {
            vocabolary.set(word, 1);
        } else {
            let value = vocabolary.get(word) + 1;
            vocabolary.set(word, value);
        }
    }
    let sorted = [...vocabolary.entries()].sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, topX);
}
console.log(mostFrequentWords(sentence));

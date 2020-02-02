/**
 * Day 18 Exercises
 */
const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
/**
 * Level 1
 */
// L1.01 Read the countries API using fetch and print the name of country, capital, languages,
//       population and area.
const readCountries = async url => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        for (const country of countries) {
            console.log(JSON.stringify(country, ['name', 'capital', 'languages', 'population', 'area'], 4));
        }
    } catch (err) {
        console.log(err); 
    }
}

readCountries(countriesAPI);

/**
 * Exercises: Level 2
 */
// L2.01 Print out all the cat names in to catNames variable.
const readCatNames = async url => {
    try {
        const response = await fetch(url);
        const cats = await response.json();
        let result = [];
        for (const cat of cats) {
            // result.push(JSON.stringify(cat, ['name']));  
            result.push(cat.name);  
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

const catNames = readCatNames(catsAPI)
                    .then(data => data)
                    .catch(error => console.log(error));
console.log('Cat\'s name', JSON.stringify(catNames));

/** 
 * Exercises: Level 3
 */

 
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
console.log('Cat\'s name', catNames);

/** 
 * Exercises: Level 3
 */
// L3.01 Read the cats api and find the average weight of cat in metric unit.
const parseCatWeightAndCalculateAvg = range => {
    let trimmedRange = range.trim();
    let [min, max] = trimmedRange.split('-');
    min = Number(min.trim());
    max = Number(max.trim());
    return (max + min)/2.0;
}

const readCatWeights = async url => {
    try {
        const response = await fetch(url);
        const cats = await response.json();
        let result = [];
        for (const cat of cats) {
            result.push({
                name: cat.name,
                avgWeigth: parseCatWeightAndCalculateAvg(cat.weight.metric)});  
        }
        return result;
    } catch (error) {
        console.log(error);
    }
    return result;
}
const catWeigths = readCatWeights(catsAPI)
                        .then(data => data)
                        .catch(error => console.log('ERROR', error));
console.log('Cat Wigths:', catWeigths);

// L3.02 Read the countries api and find out the 10 largest countries
const readCountriesSize = async url => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        const countriesArea = [];
        const tenLargest = [{name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0},
                            {name:'', area: 0}];
        for (const country of countries) {
            countriesArea.push(
                {name: country.name,
                 area: Number(country.area)});
        }
        for (const ca of countriesArea) {
            let area = ca.area;
            // evaluate area versus tenLargest areas
        }
    } catch (err) {
        console.log(err); 
    }
}

readCountries(countriesAPI);


// L3.03 Read the countries api and count total number of languages in the world used as officials.
 
console.log('***** Music Collection *****')

let collection = [];
/**
 * @param {string} title
 * @param {string} artist
 * @param {number} yearPublished
 * @return {object} Returns new object  
 */ 
function addToCollection(title, artist, yearPublished) {
    const newRecord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(newRecord);
    return newRecord;
};

console.log(addToCollection('American Teen', 'Khalid', 2017));
console.log(addToCollection('Atlas:Enneagram', 'Sleeping At Last', 2019));
console.log(addToCollection('The Click', 'AJR', 2017));
console.log(addToCollection('The Lumineers', 'The Lumineers', 2012));
console.log(addToCollection('WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'Billie Eilish', 2019));
console.log(addToCollection('folklore', 'Taylor Swift', 2020));
console.log(addToCollection('OK Orchestra', 'AJR', 2021));
// Added extra album to collection to have same artist twice (findByArtist)
console.log(collection);

/**
 * @param {array} recordsInput Array of record collection
 */
function showCollection(recordsInput) {
    console.table(recordsInput);
    for (let record of recordsInput) {
        console.log(record.title + ' by ' + record.artist + ',', 'published in', record.yearPublished);
    };
}
showCollection(collection);


/**
 * @param {string} artistInput artist to search for
 * @param collectionInput collection to look through
 * @return returns an array with matching artist
 */
function findByArtist(artistInput, collectionInput) {
    let foundArtists = [];
    for(let artist of collectionInput) {
        if (artistInput === artist.artist) {
            foundArtists.push(artist.artist);
        } 
    }
    return foundArtists;
}
console.log(findByArtist('AJR', collection));

/**
 * @param {string} searchInput 
 * @return returns an array of items in collection matching search criteria 
 */
function search(searchInput, collectionInput) {
    let searchResults = [];
    for(let objectItem of collectionInput) {
        if (searchInput === objectItem.title || searchInput === objectItem.artist || searchInput === objectItem.yearPublished) {
            searchResults.push('title: ', objectItem.title, 'artist: ' + objectItem.artist, 'year: ' + objectItem.yearPublished);
        }
    }
    if (searchInput === '') {
        return collectionInput;
    }
    return searchResults;
}

console.log(search('', collection));

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
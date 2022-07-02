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
    return;
};

addToCollection('American Teen', 'Khalid', 2017);
addToCollection('Atlas:Enneagram', 'Sleeping At Last', 2019);
addToCollection('The Click', 'AJR', 2017);
addToCollection('The Lumineers', 'The Lumineers', 2012);
addToCollection('WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'Billie Eilish', 2019);
addToCollection('folklore', 'Taylor Swift', 2020);
console.log(collection);


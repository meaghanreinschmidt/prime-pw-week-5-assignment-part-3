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
}
